import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type PolicyPageProps = {
  title: string;
  summary: string;
  children: ReactNode;
};

const policyLinks = [
  ["Privacy Policy", "/privacy-policy"],
  ["Refund Policy", "/refund-policy"],
  ["Terms of Service", "/terms-of-service"],
] as const;

export default function PolicyPage({ title, summary, children }: PolicyPageProps) {
  return (
    <main className="policy-shell">
      <header className="policy-header">
        <Link href="/" className="policy-brand" aria-label="Haytham Builds home">
          <Image
            src="/brand/haytham-builds-horizontal-black.svg"
            alt="Haytham Builds"
            width={184}
            height={42}
            unoptimized
          />
        </Link>
        <Link href="/" className="policy-home-link">
          Back to the website
        </Link>
      </header>

      <article className="policy-document">
        <div className="policy-intro">
          <p className="eyebrow">Legal</p>
          <h1>{title}</h1>
          <p className="policy-summary">{summary}</p>
          <p className="policy-date">Effective and last updated: August 31, 2026</p>
        </div>
        <div className="policy-copy">{children}</div>
      </article>

      <footer className="policy-footer">
        <div>
          <strong>Haytham Builds LLC</strong>
          <span>Registered business address: 5203 Juan Tabo Blvd STE 2B, Albuquerque, NM 87111</span>
          <a href="tel:+19145065175">+1 914 506 5175</a>
        </div>
        <nav aria-label="Policy navigation">
          {policyLinks.map(([label, href]) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
        </nav>
      </footer>
    </main>
  );
}
