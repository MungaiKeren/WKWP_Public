import React, { useRef, useState, useEffect } from "react";
import Footer from "../components/Utils/footer";
import "../Styles/ContactUs.scss";
import Header from "../components/Utils/header";
import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";

export default function ContactUsPage(props) {
  const [isErr, setIsErr] = useState("");
  const [isLoading, setIsLoading] = useState(null);
  const rfFName = useRef();
  const rfEmail = useRef();
  const rfLName = useRef();
  const rfSubject = useRef();
  const rfContent = useRef();

  const [body, updateBody] = useState({
    To: "",
    From: "",
    Phone: "",
    Subject: "",
    Content: "",
  });

  const postMessage = () => {
    setIsLoading(true);
    let d = body;
    d.To = rfEmail.current.value;
    d.From = rfFName.current.value;
    d.Phone = rfLName.current.value;
    d.Subject = rfSubject.current.value;
    d.Content = rfContent.current.value;
    updateBody(d);
    setIsErr("");

    if (!validateEmail(body.To))
      return setIsErr("Please enter a valid email address!");
    if (!validateMessage(body.Content))
      return setIsErr("Message can not be blank!");

    if (validateEmail(body.To) && validateMessage(body.Content)) {
      fetch("/messages/post", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else throw Error("");
        })
        .then((data) => {
          console.log(data);
          setIsLoading(false);
          if (data.success) {
            setIsErr(data.success);
            rfFName.current.value = "";
            rfEmail.current.value = "";
            rfLName.current.value = "";
            rfSubject.current.value = "";
            rfContent.current.value = "";
          } else if (data.error) {
            setIsErr(data.error);
          } else setIsErr("Oops! Something went wrong!");
        })
        .catch((err) => {
          setIsLoading(false);
          setIsErr("Oops! Something went wrong!");
        });
    }
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validateMessage = (content) => {
    return content.length >= 1;
  };

  return (
    <div className="ContactUsPage">
      <div className="headings">
        <Header />
      </div>

      <div className="hero">
        <div className="txt">
          <h4>Let's Start a Conversation</h4>
          <p>
            Thank you for visiting our website. Might you be having any trouble
            and need our assistance? Well, we are eager to help! Just log a
            message to us and our customer service team will respond to your
            needs as soon as possible
          </p>
        </div>
      </div>

      <div className="form-content">
        <div className="left">
          <h4>Send us a message</h4>

          <p>{isErr}</p>
          <div className="two-equal">
            <div>
              <label htmlFor="First Name">First Name</label>
              <input type="text" placeholder="First Name*" ref={rfFName} />
            </div>
            <div>
              <label htmlFor="Last Name">Last Name</label>
              <input label="Last Name" placeholder="Last Name*" ref={rfLName} />
            </div>
          </div>

          <div className="two-equal">
            <div>
              <label htmlFor="Email Address">Email Address</label>
              <input
                label="Email Address"
                placeholder="Email Address*"
                ref={rfEmail}
              />
            </div>
            <div>
              <label htmlFor="Subject">Subject</label>
              <input label="Subject" placeholder="Subject*" ref={rfSubject} />
            </div>
          </div>

          <div className="message">
            <label htmlFor="Message">Message</label>
            <textarea cols="50" rows="2" placeholder="Message*" ref={rfContent}></textarea>
          </div>

          <div className="btn">
            <button onClick={postMessage}>Submit</button>
          </div>
        </div>
        <div className="right">
          <h4>Follow Us</h4>

          <div className="socials">
            <FaXTwitter color="#199EFF" size={30} />
            <FaFacebookF color="#199EFF" size={30} />
            <FaInstagram color="#199EFF" size={30} />
          </div>
        </div>
      </div>

      <div className="more-info">
        <div>
          <h4>Mission Contact</h4>
          <p>Amanda Robertson</p>
          <p>WASH Team Lead</p>
          <p>Cell: +254 20 862 2000</p>
          <p>Email: arobertson@usaid.gov</p>
        </div>

        <div>
          <h4>Partner Contact</h4>
          <p>Japheth Mbuvi</p>
          <p>Chief of Party</p>
          <p>Email: japeth_mbuvi@dai.com</p>
        </div>

        <div>
          <h4>For More information</h4>
          <p>Email: usaidkea@usaid.gov</p>
          <p>Website: www.usaid.gov/kenya</p>
          <p>Facebook: USAIDKenya</p>
          <p>Twitter: @USAIDKenya</p>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
