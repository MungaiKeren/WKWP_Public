import React from "react";
import "../Styles/landing.scss";
import Header from "./../components/Utils/header";
import Footer from "../components/Utils/footer";
import HeroSection from "../components/Home/HeroSection";
import Counties from "../components/Home/Counties";
import ExpectedImpact from "../components/Home/ExpectedImpact";
import MileStones from "../components/Home/MileStones";

export default function Home() {
  return (
    <div className="landing">
      <div className="headings">
        <Header active="Home"/>
      </div>
      <HeroSection />
      <Counties />
      <MileStones />
      <ExpectedImpact />
      <Footer />
    </div>
  );
}
