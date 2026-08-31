import type { Metadata } from "next";
import PolicyPage from "../components/PolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Haytham Builds",
  description: "How Haytham Builds LLC collects, uses, and protects personal information.",
};

export default function PrivacyPolicy() {
  return (
    <PolicyPage
      title="Privacy Policy"
      summary="This policy explains what information Haytham Builds receives through this website and related business conversations, why we use it, and the choices available to you."
    >
      <section>
        <h2>Who we are</h2>
        <p>
          Haytham Builds LLC is a New Mexico limited liability company, operated by its founder
          from Casablanca and serving clients across markets. In this policy, “Haytham Builds,”
          “we,” “us,” and “our” refer to Haytham Builds LLC.
        </p>
      </section>

      <section>
        <h2>Information we receive</h2>
        <p>We may receive the following categories of personal information:</p>
        <ul>
          <li>
            Contact and business information you provide, such as your name, email address,
            phone number, company, role, and the information included in an inquiry.
          </li>
          <li>
            Meeting information you submit when booking through Google Calendar, such as your
            contact details, selected time, and any notes you add.
          </li>
          <li>
            Engagement information created when we discuss or provide services, including
            proposals, contracts, project communications, invoices, payment records, and
            deliverables.
          </li>
          <li>
            Basic technical information processed when you visit the website, such as your IP
            address, browser and device type, requested pages, referring page, and request date
            and time. Our hosting provider, Vercel, processes this information to deliver and
            secure the website.
          </li>
        </ul>
        <p>
          The website does not currently provide user accounts, accept payments, run advertising
          pixels, or use a website analytics product. We do not currently set our own advertising
          or analytics cookies.
        </p>
      </section>

      <section>
        <h2>How we use information</h2>
        <p>We use personal information when reasonably necessary to:</p>
        <ul>
          <li>respond to inquiries and schedule conversations;</li>
          <li>assess fit, prepare proposals, and enter into service agreements;</li>
          <li>provide, manage, invoice, and improve agreed services;</li>
          <li>protect the website, our systems, and our business from misuse or security threats;</li>
          <li>maintain business, accounting, tax, and legal records; and</li>
          <li>establish, exercise, or defend legal claims and comply with applicable law.</li>
        </ul>
        <p>
          Where a law requires a legal basis, we rely on steps taken at your request before a
          contract, performance of a contract, compliance with legal obligations, our legitimate
          interests in operating and protecting the business, or consent where required.
        </p>
      </section>

      <section>
        <h2>When information is shared</h2>
        <p>We may share personal information only as needed with:</p>
        <ul>
          <li>
            service providers that support hosting, scheduling, communications, document
            handling, accounting, payment processing, or other business operations;
          </li>
          <li>professional advisers such as accountants, lawyers, or insurers;</li>
          <li>
            authorities or other parties when required by law, needed to protect rights and
            safety, or necessary in connection with a business reorganisation; and
          </li>
          <li>another party when you direct us or give us permission.</li>
        </ul>
        <p>
          We do not sell personal information or share it for cross-context behavioural
          advertising.
        </p>
      </section>

      <section>
        <h2>Third-party services and links</h2>
        <p>
          The website links to Google Calendar for meeting bookings and to LinkedIn. When you
          follow those links, the third party processes information under its own terms and
          privacy policy. Haytham Builds receives only the information the service makes available
          to us or that you choose to send us.
        </p>
      </section>

      <section>
        <h2>International processing</h2>
        <p>
          Haytham Builds works across markets and uses service providers that may process
          information in the United States and other countries. Those countries may have privacy
          laws different from the laws where you live. Your information may therefore be
          transferred to, stored in, or accessed from a country different from your own.
        </p>
      </section>

      <section>
        <h2>Retention and security</h2>
        <p>
          We retain personal information only for as long as reasonably needed for the purposes
          described above, including contractual, accounting, tax, dispute, and legal needs. We
          use reasonable administrative and technical safeguards, but no internet transmission or
          storage system can be guaranteed completely secure.
        </p>
      </section>

      <section>
        <h2>Your choices and rights</h2>
        <p>
          Depending on where you live, you may have rights to request access to, correction of,
          deletion of, restriction of, or a copy of your personal information, or to object to
          certain processing. You may also withdraw consent for future processing where consent
          is the basis used. These rights can be subject to legal exceptions.
        </p>
        <p>
          To make a request, email{" "}
          <a href="mailto:haythammokhtari@haythambuilds.com">
            haythammokhtari@haythambuilds.com
          </a>
          . We may need to verify your identity before completing a request.
        </p>
      </section>

      <section>
        <h2>Children</h2>
        <p>
          This website and our services are intended for business users and are not directed to
          children under 18. We do not knowingly collect personal information from children
          through the website.
        </p>
      </section>

      <section>
        <h2>Changes to this policy</h2>
        <p>
          We may update this policy when our website, services, or legal obligations change. The
          effective date at the top of this page shows when the current version took effect.
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
          <a href="mailto:haythammokhtari@haythambuilds.com">
            haythammokhtari@haythambuilds.com
          </a>
        </address>
      </section>
    </PolicyPage>
  );
}
