import React from "react"; 

import app from "../../assets/images/KirinyagaAmis.apk"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="sections">
          <div className="sect">
            <h3>Important Links</h3>
            <a href="/">Home</a>
            <a href="/arc">Resource Center</a>
            <a href="/testimonials">Testimonials</a>
            <a href="/stakeholders">Stakeholders</a>
            <a href="/news">News</a>
            <a href="/contact">Contact</a>
          </div>
          <div className="sect">
            <h3>Applications</h3>
            <a href="https://admin-kirinyaga.dat.co.ke/" target="_blank">
              Staff Portal
            </a>
            <a href="https://farmers-kirinyaga.dat.co.ke/" target="_blank">
              Farmer Portal
            </a>
            <a href="https://arc-kirinyaga.dat.co.ke/" target="_blank">
              Agricultural Resource Center
            </a>
            <a href={app} download>
              KiriAMIS Mobile App
            </a>
          </div>
          <div className="sect">
            <h3>Legal</h3>
            <a href="/terms">Terms and Conditions</a>
            <a href="/privacy">Privacy Policy</a>
          </div>
        </div>
        <p>&copy; {new Date().getFullYear()} KiriAMIS. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
