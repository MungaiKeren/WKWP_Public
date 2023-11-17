import React from "react";
import "../Styles/terms.scss"; // Import your component-specific CSS file
import Header from "../components/Utils/header";
import Footer from "../components/Utils/footer";

const Terms = () => {
  return (
    <div className="terms">
      <Header />
      <div className="tnc">
        <div className="container">
          <h1>Western Kenya Water Project Terms and Conditions</h1>

          <h2>1. Acceptance of Terms and Conditions</h2>
          <p>
            By participating in or benefiting from the Western Kenya Water
            Project (the "Project"), you agree to comply with these Terms and
            Conditions. If you do not agree with these terms, please do not
            engage with the Project.
          </p>

          <h2>2. Project Overview</h2>
          <p>
            The Western Kenya Water Project aims to improve access to clean and
            safe water in Western Kenya. The project is funded by USAID and
            implemented by DAI Global LLC. The project involves various
            activities, including but not limited to infrastructure development,
            community engagement, and data collection.
          </p>

          <h2>3. Eligibility</h2>
          <p>
            Participation in the Project is open to individuals, organizations,
            and entities that meet the eligibility criteria established by
            USAID, DAI Global LLC, and other relevant stakeholders.
          </p>

          <h2>4. Data Collection and Privacy</h2>
          <p>
            4.1. By participating in the Project, you consent to the collection
            and use of your personal information in accordance with the
            Project's Privacy Policy. Please refer to the Privacy Policy for
            more details on data collection and protection.
          </p>

          <h2>5. Intellectual Property Rights</h2>
          <p>
            5.1. All intellectual property rights related to the Project,
            including but not limited to patents, copyrights, trademarks, and
            trade secrets, are the property of their respective owners. You
            agree not to infringe upon these rights.
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
            please contact us at [contact information].
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;
