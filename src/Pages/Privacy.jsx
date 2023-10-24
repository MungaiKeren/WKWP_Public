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
          <h1>Privacy Policy</h1>
          <p>
            This Privacy Policy describes how your personal information is
            collected, used, and shared when you use the Kirinyaga Agricultural
            Management Information System (KiriAMIS).
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We collect personal information that you provide to us when using
            KiriAMIS, including your name, email address, and contact
            information.
          </p>

          <h2>2. Use of Information</h2>
          <p>
            We use the collected information to provide and improve KiriAMIS,
            communicate with you, and personalize your experience. We may also
            use the information to send you important updates or promotional
            materials.
          </p>

          <h2>3. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to
            fulfill the purposes outlined in this Privacy Policy, unless a
            longer retention period is required or permitted by law.
          </p>

          <h2>4. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal
            information from unauthorized access, disclosure, alteration, or
            destruction. However, please note that no method of transmission
            over the internet or electronic storage is completely secure.
          </p>

          <h2>5. Third-Party Services</h2>
          <p>
            We may share your personal information with third-party service
            providers to assist us in operating KiriAMIS and delivering the
            requested services. These third parties are required to protect your
            information and only use it for the purposes specified by us.
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

export default Privacy;
