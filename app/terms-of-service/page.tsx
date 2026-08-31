import type { Metadata } from "next";
import PolicyPage from "../components/PolicyPage";

export const metadata: Metadata = {
  title: "Terms of Service | Haytham Builds",
  description: "Terms governing use of the Haytham Builds website and information about its services.",
};

export default function TermsOfService() {
  return (
    <PolicyPage
      title="Terms of Service"
      summary="These terms govern access to haythambuilds.com. Client services are governed by the separate written agreement for the engagement."
    >
      <section>
        <h2>Agreement to these terms</h2>
        <p>
          These Terms of Service are an agreement between you and Haytham Builds LLC. By using
          haythambuilds.com, you agree to these terms and our Privacy Policy. If you do not agree,
          do not use the website.
        </p>
        <p>
          You must be at least 18 years old and able to enter into a binding agreement to use the
          website. If you use it for an organisation, you represent that you have authority to act
          for that organisation.
        </p>
      </section>

      <section>
        <h2>Website information and service engagements</h2>
        <p>
          The website describes Haytham Builds and its services. It is provided for general
          information and does not by itself create a client relationship, offer, promise, or
          obligation to provide services.
        </p>
        <p>
          Any client engagement requires separately agreed commercial terms, normally in a
          proposal, statement of work, services agreement, or other written order. That written
          agreement controls the scope, deliverables, fees, payment, ownership, confidentiality,
          cancellation, liability, and other terms of the engagement. If it conflicts with these
          website terms, the written engagement agreement controls for the client work.
        </p>
        <p>
          Haytham Builds provides custom professional services. Pricing, deliverables, timing,
          and payment terms are confirmed in writing before payment is due. The website does not
          offer direct checkout or sell leads, traffic, or guaranteed commercial outcomes.
        </p>
      </section>

      <section>
        <h2>No guaranteed outcome</h2>
        <p>
          Examples, figures, case studies, pipeline illustrations, and descriptions of past work
          are provided for context. They do not guarantee that another engagement will produce
          the same or any particular result. Commercial outcomes depend on factors outside
          Haytham Builds&apos; control, including the offer, market, timing, client inputs, and buyer
          decisions.
        </p>
      </section>

      <section>
        <h2>Permitted use</h2>
        <p>You may use the website for lawful business information and evaluation. You may not:</p>
        <ul>
          <li>interfere with the website, its security, or another person&apos;s use of it;</li>
          <li>introduce malicious code or attempt unauthorised access;</li>
          <li>misrepresent your identity or affiliation;</li>
          <li>copy, republish, sell, or exploit website content except as allowed by law; or</li>
          <li>use the website in a way that violates applicable law or another person&apos;s rights.</li>
        </ul>
      </section>

      <section>
        <h2>Intellectual property</h2>
        <p>
          The website, its original content, brand assets, design, and underlying materials are
          owned by Haytham Builds LLC or used with permission and are protected by applicable
          intellectual property laws. Haytham Builds grants you a limited, revocable,
          non-exclusive right to access the website for its intended purpose. No other licence is
          granted.
        </p>
        <p>
          Third-party names and logos remain the property of their respective owners. Their
          appearance identifies organisations connected to professional experience and does not
          imply sponsorship or endorsement.
        </p>
      </section>

      <section>
        <h2>Third-party services</h2>
        <p>
          The website links to services operated by third parties, including Google Calendar and
          LinkedIn. Haytham Builds does not control those services and is not responsible for
          their availability, content, security, or practices. Your use of them is governed by
          their own terms and policies.
        </p>
      </section>

      <section>
        <h2>Availability and changes</h2>
        <p>
          We may correct, update, suspend, or discontinue any part of the website without notice.
          We do not promise that the website will always be available, error-free, or suitable for
          a particular purpose.
        </p>
      </section>

      <section>
        <h2>Disclaimers</h2>
        <p>
          To the fullest extent permitted by law, the website and its content are provided “as
          is” and “as available,” without express or implied warranties. Website content is not
          legal, tax, financial, or other regulated professional advice.
        </p>
      </section>

      <section>
        <h2>Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, Haytham Builds LLC and its member, manager,
          contractors, and service providers will not be liable for indirect, incidental, special,
          consequential, exemplary, or punitive damages, or for lost profits, revenue, data,
          goodwill, or business opportunities arising from use of the website.
        </p>
        <p>
          To the fullest extent permitted by law, total liability arising from the website will
          not exceed the amount you paid to access the website, if any. These limits do not apply
          where liability cannot lawfully be excluded or limited. Liability relating to paid
          client services is governed by the applicable written engagement agreement.
        </p>
      </section>

      <section>
        <h2>Governing law and disputes</h2>
        <p>
          These website terms are governed by the laws of the State of New Mexico, without regard
          to conflict-of-law rules. Unless applicable law requires otherwise, disputes arising
          only from the website will be brought in the state or federal courts serving Bernalillo
          County, New Mexico. A separate client agreement may set a different dispute process for
          an engagement.
        </p>
      </section>

      <section>
        <h2>General terms</h2>
        <p>
          If a provision of these terms is unenforceable, the remaining provisions continue. A
          failure to enforce a provision is not a waiver. You may not transfer your rights under
          these terms without our written consent. We may update these terms by posting a revised
          version and changing the effective date at the top of the page.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <address>
          Haytham Builds LLC
          <br />
          Registered business address:
          <br />
          5203 Juan Tabo Blvd STE 2B
          <br />
          Albuquerque, NM 87111
          <br />
          United States
          <br />
          <a href="tel:+19145065175">+1 914 506 5175</a>
          <br />
          <a href="mailto:haythammokhtari@haythambuilds.com">
            haythammokhtari@haythambuilds.com
          </a>
        </address>
      </section>
    </PolicyPage>
  );
}
