import React from "react";
import usaid_logo from "../../assets/images/usaid_logo.png";
import wkwp_logo from "../../assets/images/wkwp_logo.png";
import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="sections">
          <div className="sect">
            <h3>Quick Links</h3>
            <a href="/">Home</a>
            <a href="/arc">Success Stories</a>
            <a href="/publications">Publications</a>
            <a href="/about">About WKWP</a>
            <a href="/contact">Contact Us</a>
          </div>
          <div className="sect">
            <h3>Counties</h3>
            <div className="two-equal">
              <div>
                <a href="#">Bungoma</a>
                <a href="#">Busia</a>
                <a href="#">Kakamega</a>
                <a href="#">Homabay</a>
              </div>
              <div>
                <a href="#">Siaya</a>
                <a href="#">Kisumu</a>
                <a href="#">Migori</a>
                <a href="#">Kisii</a>
              </div>
            </div>
          </div>
          <div className="sect">
            <h3>Implementing Partner</h3>
            <a href="https://www.dai.com/" target="_blank">
              DAI Global LLC
            </a>
          </div>

          <div className="sect">
            <h3>Socials</h3>
            <div className="socials">
              <FaXTwitter color="#199EFF" size={30} />
              <FaFacebookF color="#199EFF" size={30} />
              <FaInstagram color="#199EFF" size={30} />
              <FaLinkedin color="#199EFF" size={30} />
              <FaYoutube color="#199EFF" size={30} />
            </div>
          </div>
        </div>

        <hr />

        <div className="bottom">
          <img src={usaid_logo} alt="" />
          <p>&copy; {new Date().getFullYear()} WKWP. All rights reserved.</p>
          <p
            onClick={() => {
              window.location.href = "/terms";
            }}
          >
            Terms and Conditions
          </p>
          <p
            onClick={() => {
              window.location.href = "/privacy";
            }}
          >
            Privacy Policy
          </p>

          <img src={wkwp_logo} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
