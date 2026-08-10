"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

function extrudedShape(points: Array<[number, number]>, material: THREE.Material) {
  const shape = new THREE.Shape();
  shape.moveTo(points[0][0], points[0][1]);
  points.slice(1).forEach(([x, y]) => shape.lineTo(x, y));
  shape.closePath();

  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: 0.52,
    bevelEnabled: true,
    bevelSegments: 5,
    bevelSize: 0.07,
    bevelThickness: 0.09,
    curveSegments: 10,
  });
  geometry.center();
  geometry.computeVertexNormals();
  return new THREE.Mesh(geometry, material);
}

export default function FrameScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(33, 1, 0.1, 100);
    camera.position.set(0, 0, 8.5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    mount.appendChild(renderer.domElement);

    const graphite = new THREE.MeshPhysicalMaterial({
      color: 0x3a3936,
      metalness: 0.76,
      roughness: 0.25,
      clearcoat: 0.55,
      clearcoatRoughness: 0.32,
    });
    const graphiteDark = new THREE.MeshPhysicalMaterial({
      color: 0x242321,
      metalness: 0.82,
      roughness: 0.3,
      clearcoat: 0.42,
    });
    const sand = new THREE.MeshPhysicalMaterial({
      color: 0xc7a96b,
      emissive: 0x3d2d12,
      emissiveIntensity: 0.28,
      metalness: 0.62,
      roughness: 0.2,
      clearcoat: 0.75,
    });

    const frame = new THREE.Group();
    const upper = extrudedShape(
      [[-2, 2], [1.12, 2], [1.12, 1.12], [-1.12, 1.12], [-1.12, -1.18], [-2, -1.18]],
      graphite,
    );
    const lower = extrudedShape(
      [[2, 1.18], [1.12, 1.18], [1.12, -1.12], [-1.12, -1.12], [-1.12, -2], [2, -2]],
      graphiteDark,
    );
    upper.position.z = 0.12;
    lower.position.z = -0.08;
    frame.add(upper, lower);

    const signalGeometry = new THREE.BoxGeometry(0.58, 0.58, 0.58, 4, 4, 4);
    const signal = new THREE.Mesh(signalGeometry, sand);
    signal.position.set(1.63, 1.68, 0.42);
    frame.add(signal);

    const squareGeometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-0.68, -0.68, -0.42),
      new THREE.Vector3(0.68, -0.68, -0.42),
      new THREE.Vector3(0.68, 0.68, -0.42),
      new THREE.Vector3(-0.68, 0.68, -0.42),
      new THREE.Vector3(-0.68, -0.68, -0.42),
    ]);
    const square = new THREE.Line(squareGeometry, new THREE.LineBasicMaterial({ color: 0x77736a, transparent: true, opacity: 0.55 }));
    frame.add(square);

    const axisMaterial = new THREE.LineBasicMaterial({ color: 0x77736a, transparent: true, opacity: 0.22 });
    const horizontal = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-1.25, 0, -0.48), new THREE.Vector3(1.25, 0, -0.48)]),
      axisMaterial,
    );
    const vertical = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, -1.25, -0.48), new THREE.Vector3(0, 1.25, -0.48)]),
      axisMaterial,
    );
    frame.add(horizontal, vertical);

    frame.rotation.set(-0.22, 0.48, -0.16);
    scene.add(frame);

    scene.add(new THREE.HemisphereLight(0xf3f0e8, 0x080808, 1.7));
    const key = new THREE.SpotLight(0xfff4dd, 40, 30, Math.PI / 5, 0.6, 1.3);
    key.position.set(-4, 6, 7);
    scene.add(key);
    const rim = new THREE.PointLight(0xc7a96b, 22, 18, 1.4);
    rim.position.set(5, 1, 5);
    scene.add(rim);
    const fill = new THREE.DirectionalLight(0x9da8b8, 2.2);
    fill.position.set(-4, -3, 4);
    scene.add(fill);

    const pointer = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onPointerMove = (event: PointerEvent) => {
      const bounds = mount.getBoundingClientRect();
      target.x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 0.32;
      target.y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 0.2;
    };

    const resize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
    };

    const observer = new ResizeObserver(resize);
    observer.observe(mount);
    mount.addEventListener("pointermove", onPointerMove, { passive: true });
    resize();

    const clock = new THREE.Clock();
    let animationFrame = 0;
    const render = () => {
      const time = clock.getElapsedTime();
      pointer.x += (target.x - pointer.x) * 0.045;
      pointer.y += (target.y - pointer.y) * 0.045;
      if (!reduceMotion) {
        frame.rotation.y = 0.48 + pointer.x + Math.sin(time * 0.36) * 0.045;
        frame.rotation.x = -0.22 - pointer.y + Math.cos(time * 0.42) * 0.025;
        frame.position.y = Math.sin(time * 0.62) * 0.09;
        signal.rotation.y = time * 0.22;
        signal.rotation.x = time * 0.16;
      }
      renderer.render(scene, camera);
      animationFrame = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(animationFrame);
      observer.disconnect();
      mount.removeEventListener("pointermove", onPointerMove);
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.Line) {
          object.geometry.dispose();
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          materials.forEach((material) => material.dispose());
        }
      });
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div className="frame-scene" ref={mountRef} aria-hidden="true" />;
}
