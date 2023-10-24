import React from "react";
import "../Styles/landing.scss";
import Header from "./../components/Utils/header";
import Footer from "../components/Utils/footer";
import { useEffect, useState } from "react";
import Hero from "../components/Home/Hero";
import Data from "../components/Home/Data";
import About from "../components/Home/About";
import Services from "../components/Home/Services";
import Partners from "../components/Home/Partners";
import Benefits from "../components/Home/Benefits";
import HeroSection from "../components/Home/HeroSection";
import Counties from "../components/Home/Counties";
import ExpectedImpact from "../components/Home/ExpectedImpact";

export default function Home() {
  return (
    <div className="landing">
      <div className="headings">
        <Header active="Home"/>
      </div>
      <HeroSection />
      <Counties />
      <ExpectedImpact />
      <Services />
      <Partners />
      <Benefits />
      <Footer />
    </div>
  );
}
