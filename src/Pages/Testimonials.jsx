import React from "react";
import "../Styles/testimony.scss";
import Header from "../components/Utils/header";
import Footer from "../components/Utils/footer";
import Testimony from "../components/Utils/testimony";
import Hero from "../components/Home/Hero";

export default function Testimonials() {
  const test = [
    {
      title: "System Use",
      content:
        "Kiri AMIS mainly engaged in several initiatives to facilitate the use of digital technology and improved access to information to create opportunities in agriculture and address some of its most pressing challenges. I hope this system intends to provide reliable and efficient communication and interaction platform among all stakeholders of Kirinyaga County Government.",
      author: "Ministry of Agriculture",
    },
    {
      title: "Farmers Data",
      content:
        "We have been using Kiri AMIS for a year now, and it has revolutionized our farming operations. It simplifies data management and helps us optimize our resources effectively.",
      author: "Anonymous",
    },
    {
      title: "Farming Operations",
      content:
        "Kiri AMIS is a game-changer for agricultural information management. It has streamlined our processes and enhanced our productivity. The support team is also exceptional!",
      author: "Anonymous",
    },
    {
      title: "Farming Management",
      content:
        "Kiri AMIS has greatly improved our farm management. It provides us with accurate and timely information for making informed decisions. Highly recommended!",
      author: "Anonymous",
    },
  ];
  return (
    <div className="testimonials">
      <div className="headings">
        <Header />
      </div>
      <Hero />
      <div className="tsm">
        <div className="container">
          <h3>User feedback</h3>
          <h1>Testimonials</h1>
          <p>
            Its heartwarming to see how the Kiri AMIS system had positively
            affected our stakeholders to bring out the best in what they do.
          </p>
          {test.map((item, i) => {
            return <Testimony key={i} item={item} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
