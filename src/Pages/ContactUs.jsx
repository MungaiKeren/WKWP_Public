import React, { useRef, useState, useEffect } from "react";
import Footer from "../components/Utils/footer";
import "../Styles/ContactUs.scss";
import Header from "../components/Utils/header";
import Hero from "../components/Home/Hero";

export default function ContactUsPage(props) {
  const [isErr, setIsErr] = useState("");
  const [isLoading, setIsLoading] = useState(null);
  const rfName = useRef();
  const rfEmail = useRef();
  const rfPhone = useRef();
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
    d.From = rfName.current.value;
    d.Phone = rfPhone.current.value;
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
            rfName.current.value = "";
            rfEmail.current.value = "";
            rfPhone.current.value = "";
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
      <Hero />
      <div className="MainContent">
        <div className="contactsContent">
          <div className="userMessage">
            <div className="form">
              <h3>Contact Us</h3>
              <div className="input">
                <div className="dv1">
                  <input label="Name" placeholder="Full Name*" ref={rfName} />
                  <input
                    label="Email"
                    placeholder="Email Address*"
                    ref={rfEmail}
                  />
                </div>

                <div className="dv2">
                  <input
                    label="Phone"
                    placeholder="Phone Number*"
                    ref={rfPhone}
                  />
                  <input
                    label="Subject"
                    placeholder="Subject*"
                    ref={rfSubject}
                  />
                </div>

                <div className="dv3">
                  <textarea
                    className="content"
                    placeholder="Write Message*"
                    label="Content"
                    ref={rfContent}
                    name="Content"
                    id=""
                    rows={5}
                  ></textarea>
                </div>
              </div>
              <button onClick={postMessage}>Submit</button>
            </div>
            <div className="message">
              <div className="messageIcon">
                <h3>Get in touch</h3>
                <p>
                  Kiri AMIS is a cutting-edge web-based platform designed to
                  revolutionize agricultural information management. Our
                  comprehensive system empowers farmers, researchers, and
                  agricultural organizations with intelligent tools to enhance
                  productivity, sustainability, and profitability in the
                  agricultural sector.
                </p>
                <div className="ic1">
                  <p>Email</p>
                  <a href="">
                    <i className="fa ">&#xf1fa;</i> info@kiriamis.co.ke
                  </a>
                </div>
                <div className="ic2">
                  <p>Cellphone</p>
                  <a href="">
                    <i className="fa ">&#xf095;</i> 0700 000 000
                  </a>
                </div>
                <div className="ic3">
                  <p>Mobile</p>
                  <a href="">
                    <i class="fa fa-mobile" aria-hidden="true"></i> 0700 000 000
                  </a>
                </div>
                <div className="ic4">
                  <p>Mail</p>
                  <a href="">
                    <i class="fa fa-envelope"></i> P.O Box 260-10304
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}
