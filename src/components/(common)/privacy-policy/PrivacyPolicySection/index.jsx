import { SectionTitle, Title } from "@/components/ui/SectionTitle";

const PrivacyPolicySection = ({ lang }) => {
  return (
    <section className="py-16 md:py-24">
      <div className="container space-y-16">
        <div>
          <SectionTitle>
            <Title>Privacy Policy</Title>
          </SectionTitle>
          <div>
            <p>
              We use your Personal data to provide and improve the Service. By
              using the Service, you agree to the collection and use of
              information in accordance with this Privacy Policy. Last updated:
              January 4, 2023; <br />
              This Privacy Policy describes Our policies and procedures on the
              collection, use and disclosure of Your information when You use
              the Service and tells You about Your privacy rights and how the
              law protects You. <br />
              We use Your Personal data to provide and improve the Service. By
              using the Service, You agree to the collection and use of
              information in accordance with this Privacy Policy.
            </p>
          </div>
        </div>
        <div>
          <SectionTitle>
            <Title>Links to other websites</Title>
          </SectionTitle>
          <div>
            <p>
              Our Website contains links to other websites that are not owned or
              controlled by us. Please be aware that we are not responsible for
              the privacy practices of such other websites or third parties. We
              encourage you to be aware when you leave our Website and to read
              the privacy statements of each and every website that may collect
              Personal Information. <br />
              In particular, as noted above, purchases made through the Website
              are handled by Lemon Squeezy and all such transactions, including
              any Personal Information or non-personal information collected by
              Lemon Squeezy, are under the control of Lemon Squeezy. We
              encourage purchasers to read Lemon Squeezy's Privacy Policy.
            </p>
          </div>
        </div>
        <div>
          <SectionTitle>
            <Title>Disclosure of Your Personal Data</Title>
          </SectionTitle>
          <div className="space-y-10">
            <div>
              <h3 className="mb-6">Business Transactions</h3>
              <p>
                If the Company is involved in a merger, acquisition or asset
                sale, Your Personal Data may be transferred. We will provide
                notice before Your Personal Data is transferred and becomes
                subject to a different Privacy Policy.
              </p>
            </div>
            <div>
              <h3 className="mb-6">Law enforcement</h3>
              <p>
                Under certain circumstances, the Company may be required to
                disclose Your Personal Data if required to do so by law or in
                response to valid requests by public authorities (e.g. a court
                or a government agency).
              </p>
            </div>
            <div>
              <h3 className="mb-6">Other legal requirements</h3>
              <p className="mb-4">
                The Company may disclose Your Personal Data in the good faith
                belief that such action is necessary to:
              </p>
              <ul className="list-inside list-disc space-y-2">
                <li>Comply with a legal obligation</li>
                <li>
                  Protect and defend the rights or property of the Company
                </li>
                <li>
                  Prevent or investigate possible wrongdoing in connection with
                  the Service
                </li>
                <li>
                  Protect the personal safety of Users of the Service or the
                  public
                </li>
                <li>Protect against legal liability</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <SectionTitle>
            <Title>Contact Us</Title>
          </SectionTitle>
          <div>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, You can
              contact us:
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>
                By email:{" "}
                <span className="text-primary underline">
                  info@admissionsassist.com
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicySection;
