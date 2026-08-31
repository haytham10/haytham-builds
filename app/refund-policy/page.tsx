import type { Metadata } from "next";
import PolicyPage from "../components/PolicyPage";

export const metadata: Metadata = {
  title: "Refund Policy | Haytham Builds",
  description: "The cancellation and refund rules for services purchased from Haytham Builds LLC.",
};

export default function RefundPolicy() {
  return (
    <PolicyPage
      title="Refund Policy"
      summary="Haytham Builds provides business services rather than physical goods. This policy explains how cancellations and refunds are handled when a signed agreement does not set a different rule."
    >
      <section>
        <h2>Scope of this policy</h2>
        <p>
          This policy applies to service fees paid directly to Haytham Builds LLC. The website
          does not currently accept online purchases. The scope, price, payment schedule, and
          cancellation terms for client work are normally recorded in a proposal, statement of
          work, or services agreement.
        </p>
        <p>
          If a signed agreement or written order contains a different cancellation or refund
          term, that term controls for that engagement. Nothing in this policy limits a right or
          remedy that cannot lawfully be limited.
        </p>
      </section>

      <section>
        <h2>Pricing and service delivery</h2>
        <p>
          Haytham Builds provides custom professional services. Fees, deliverables, timing, and
          payment terms are confirmed in writing before payment is due. The website does not
          publish standard prices or sell leads, traffic, or guaranteed commercial outcomes.
        </p>
      </section>

      <section>
        <h2>Cancellation before work begins</h2>
        <p>
          You may request cancellation before work begins. If we have not started the work or
          incurred an approved non-cancellable cost, we will refund prepaid service fees. Any
          deduction for an approved non-cancellable cost or non-refundable transaction charge
          will be made only where it was agreed in writing and is legally permitted.
        </p>
      </section>

      <section>
        <h2>Cancellation after work begins</h2>
        <p>
          Once work begins, fees earned for work already completed are not refundable. If you
          prepaid more than the value of completed work and approved non-cancellable costs, we
          will refund the unused balance. We will explain the calculation and provide a reasonable
          handover of paid-for work where the applicable agreement requires it.
        </p>
        <p>
          A completed and accepted milestone is non-refundable except where the applicable
          agreement or law provides otherwise. A performance fee that has been earned under the
          agreed measurement and attribution rules is also non-refundable, unless the fee was
          charged in error.
        </p>
      </section>

      <section>
        <h2>Results and change of mind</h2>
        <p>
          Haytham Builds does not guarantee a particular number of replies, meetings, customers,
          or revenue unless a signed agreement expressly says otherwise. A service that was
          performed as agreed does not become refundable solely because a hoped-for commercial
          result did not occur or because priorities changed.
        </p>
      </section>

      <section>
        <h2>Problems with the service</h2>
        <p>
          If you believe a service was not delivered as agreed, contact us promptly with the
          relevant agreement or invoice, a description of the issue, and the outcome you are
          requesting. Where practical, we may first correct or complete the affected work. This
          does not remove any right or remedy available under applicable law.
        </p>
      </section>

      <section>
        <h2>How to request a cancellation or refund</h2>
        <p>
          Email{" "}
          <a href="mailto:haythammokhtari@haythambuilds.com">
            haythammokhtari@haythambuilds.com
          </a>{" "}
          with your name, company, invoice number, payment date, reason for the request, and any
          supporting information. We aim to acknowledge a complete request within five business
          days.
        </p>
      </section>

      <section>
        <h2>Approved refunds</h2>
        <p>
          Approved refunds are normally sent to the original payment method within ten business
          days after approval. Banks and payment providers may take additional time to make the
          funds available. Currency conversion, correspondent-bank, or receiving-bank charges are
          outside our control.
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
