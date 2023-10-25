import React from "react";
import "../Styles/about.scss";
import Header from "../components/Utils/header";
import Footer from "../components/Utils/footer";
import AboutSection from "../components/About/AboutSection";
import ComponentsSection from "../components/About/ComponentSection";
import Approach from "../components/About/Approach";


export default function About() {
    return (
      <div className="about-page">
        <Header active="About WKWP" />
        <AboutSection />
        <ComponentsSection />

        <hr />
        <Approach />
        <Footer />
      </div>
    );
};