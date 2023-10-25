import React from "react";
import "../Styles/success.scss";
import Header from "../components/Utils/header";
import Footer from "../components/Utils/footer";
import img from "../assets/images/girl.png";


export default function SuccessStories() {
    return (
      <div className="success">
        <Header />
        <div className="hero">
        <img src={img} alt="" />
        <div className="overlay"></div>
        <div className="content">
            <h4>
            "Clean water is the cornerstone of success, shaping healthier
            lives and brighter tomorrows."
            </h4>
        </div>
        </div>
        <Footer />
      </div>
    );
}