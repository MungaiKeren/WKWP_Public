import React from "react";
import "../Styles/terms.scss"; // Import your component-specific CSS file
import Header from "../components/Utils/header";
import Footer from "../components/Utils/footer";

const Privacy = () => {
  return (
    <div className="terms">
      <Header />
      <div className="tnc">
        <div className="container">
          <h1>Western Kenya Water Project Privacy Policy</h1>

          <h2>1. Acceptance of Privacy Policy</h2>
          <p>
            By participating in or benefiting from the Western Kenya Water
            Project (the "Project"), you agree to comply with these Privacy
            policy. If you do not agree with these terms, please do not engage
            with the Project.
          </p>

          <h2>2. Introduction</h2>
          <p>
            The Western Kenya Water Project, funded by the United States Agency
            for International Development (USAID) and implemented by DAI Global
            LLC, is committed to protecting the privacy and confidentiality of
            personal information collected from project beneficiaries, partners,
            and stakeholders. This Privacy Policy outlines how we collect, use,
            disclose, and protect personal information.
          </p>

          <h2>3. Information we Collect</h2>
          <p>
            1. Personal Information. We may collect personal information, such
            as names, contact details, and identification information, when
            individuals voluntarily provide it to us for project-related
            purposes. Project Data. <br />
            2. We may collect personal information, such as names, contact
            details, and identification information, when individuals
            voluntarily provide it to us for project-related purposes. <br />
            3. Cookies and Analytics. Our website may use cookies and analytics
            tools to collect non-personal information about website usage,
            including IP addresses, browser types, and page views.
          </p>

          <h2>4. How We Use Information</h2>
          <p>We use the collected information for the following purposes:</p>
          <p>
            1. Project Implementation. Personal information and project data are
            used to plan, manage, and implement the Western Kenya Water Project
            effectively. <br />
            2. Communication: We may use contact information to communicate
            project updates, newsletters, and other relevant information. <br />
            3. Monitoring and Evaluation: We use data for project monitoring,
            evaluation, and reporting to USAID and other stakeholders.
          </p>

          <h2>5. Information Sharing</h2>
          <p>
            We do not sell, rent, or lease personal information to third
            parties. However, we may share personal information with:
          </p>
          <p>
            1. Project Partners: We may share information with partners and
            contractors involved in the project for project-related purposes. <br />
            2.  Legal Obligations: We may disclose information when required by law
            or to comply with legal processes.
          </p>

          <h2>6. Changes to the Privacy Policy</h2>

          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be effective upon posting the revised Privacy Policy on this
            page. We encourage you to review this Privacy Policy periodically.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            If you have any questions or concerns regarding this Privacy Policy,
            please contact us <a href="/contact">here</a>.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
