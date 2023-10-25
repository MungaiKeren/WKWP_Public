import React from "react";
import "../Styles/about.scss";
import Header from "../components/Utils/header";
import Footer from "../components/Utils/footer";
import AboutSection from "../components/About/AboutSection";
import ComponentsSection from "../components/About/ComponentSection";


export default function About() {
    return (
      <div className="about-page">
        <Header active="About WKWP" />
        <AboutSection />
        <ComponentsSection />

        <hr />
        <div className="approach">
          <h4>
            WKWP
            <span> Approach </span>
          </h4>
          <div className="bg">
            <div className="two-equal">
              <p className="red">
                Enabling locally driven solutions that are adaptable and scabale
              </p>
              <p>Integrating financial & private sector solutions</p>
              <p>Promoting inclusion of women and youth</p>
              <p className="red">
                Strengthening good governance and accountability in county
                governments and WSPs
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
};