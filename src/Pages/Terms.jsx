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
          <h1>Terms and Conditions</h1>
          <p>
            Welcome to the Kirinyaga Agricultural Management Information System
            (KiriAMIS). These terms and conditions outline the rules and
            regulations for the use of KiriAMIS.
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using KiriAMIS, you agree to be bound by these terms
            and conditions. If you do not agree with any part of these terms,
            you should not use KiriAMIS.
          </p>

          <h2>2. Intellectual Property</h2>
          <p>
            The content and materials on KiriAMIS are the property of Kirinyaga
            Agricultural Management Information System or its licensors and are
            protected by intellectual property laws. You may not use, modify, or
            distribute the content without prior written permission.
          </p>

          <h2>3. User Conduct</h2>
          <p>
            You agree to use KiriAMIS in a manner consistent with applicable
            laws and regulations and in accordance with these terms and
            conditions. You are solely responsible for any content you submit or
            transmit through KiriAMIS.
          </p>

          <h2>4. Privacy Policy</h2>
          <p>
            Your use of KiriAMIS is subject to our Privacy Policy. By using
            KiriAMIS, you consent to the collection, use, and disclosure of your
            information as described in the Privacy Policy.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            Kirinyaga Agricultural Management Information System, its directors,
            employees, or affiliates shall not be liable for any direct,
            indirect, incidental, consequential, or punitive damages arising out
            of or in connection with the use of KiriAMIS.
          </p>

          <h2>6. Governing Law and Jurisdiction</h2>
          <p>
            These terms and conditions shall be governed by and construed in
            accordance with the laws of Kenya. Any disputes arising out of or in
            connection with these terms shall be subject to the exclusive
            jurisdiction of the courts of Kenya.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;
