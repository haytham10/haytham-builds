import assert from "node:assert/strict";
import test from "node:test";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

test("renders development preview metadata", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  const html = await response.text();
  assert.match(html, developmentPreviewMeta);
  assert.match(html, /Haytham Builds LLC/i);
  assert.match(html, /href=["']tel:\+19145065175["']/i);
});

test("renders all policy pages with the legal entity and policy navigation", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `policies-${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const routes = [
    ["/privacy-policy", "Privacy Policy"],
    ["/refund-policy", "Refund Policy"],
    ["/terms-of-service", "Terms of Service"],
  ];

  for (const [route, heading] of routes) {
    const response = await worker.fetch(
      new Request(`http://localhost${route}`, {
        headers: { accept: "text/html" },
      }),
      {
        ASSETS: {
          fetch: async () => new Response("Not found", { status: 404 }),
        },
      },
      {
        waitUntil() {},
        passThroughOnException() {},
      },
    );

    assert.equal(response.status, 200, route);
    const html = await response.text();
    assert.match(html, new RegExp(`<h1[^>]*>${heading}</h1>`, "i"), route);
    assert.match(html, /Haytham Builds LLC/i, route);
    assert.match(html, /5203 Juan Tabo Blvd STE 2B/i, route);
    assert.match(html, /href=["']tel:\+19145065175["']/i, route);
    assert.match(html, /href=["']\/privacy-policy["']/i, route);
    assert.match(html, /href=["']\/refund-policy["']/i, route);
    assert.match(html, /href=["']\/terms-of-service["']/i, route);
  }
});
