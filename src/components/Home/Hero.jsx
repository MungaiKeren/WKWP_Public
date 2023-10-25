import React, { useEffect, useState } from "react";
import bg1 from "../../assets/images/bg1.jpg";
import bg2 from "../../assets/images/bg2.jpg";
import bg3 from "../../assets/images/bg3.jpg";
import bg4 from "../../assets/images/bg4.jpg";
import bg5 from "../../assets/images/bg5.jpg";
import bg6 from "../../assets/images/bg6.jpg";
import bg7 from "../../assets/images/bg7.jpg";

export default function Hero(props) {
  const content = [
    {
      title: <h1>Data Collection and Analysis</h1>,
      img: bg1,
      desc: "We collect and analyze data on crops, weather patterns, soil conditions, pests, and more to make informed decisions and improve agricultural practices",
    },
    {
      title: <h1>Crop Monitoring</h1>,
      img: bg2,
      desc: "Monitor crop growth, health, and yield through advanced sensors and remote sensing technologies. Receive real-time alerts and insights to optimize crop management.",
    },
    {
      title: <h1>Inventory Management</h1>,
      img: bg3,
      desc: "Efficiently track and manage inventory, including seeds, fertilizers, and equipment, ensuring smooth operations and minimizing waste.",
    },
    {
      title: <h1>Marketplace Integration</h1>,
      img: bg4,
      desc: "Connect with buyers, suppliers, and distributors through our integrated marketplace, enabling seamless transactions and expanding market reach.",
    },
    {
      title: <h1>Farm Management</h1>,
      img: bg5,
      desc: "Streamline farm operations with features like task scheduling, resource allocation, and farm financial management, maximizing efficiency and profitability.",
    },
    {
      title: <h1>Knowledge Sharing</h1>,
      img: bg6,
      desc: "Access a vast repository of agricultural knowledge, best practices, and research findings. Collaborate with experts, share experiences, and learn from the global farming community.",
    },
    {
      title: <h1>Mobile Compatibility</h1>,
      img: bg7,
      desc: "Enjoy the flexibility of accessing AIMS from anywhere, anytime, through our mobile app, ensuring you stay connected and informed on-the-go.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextIndex = (currentIndex + 1) % content.length;
      setCurrentIndex(nextIndex);
    }, 10000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex]);

  return (
    <div className="landing_hero">
      <div className="nhero">
        <div className="slideshow-container">
          {content.map((item, index) => (
            <MySlider
              key={index}
              item={item}
              index={index}
              currentIndex={currentIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const MySlider = (props) => {
  const [animationActive, setAnimationActive] = useState(false);

  useEffect(() => {
    setAnimationActive(false);
    setTimeout(() => {
      setAnimationActive(true);
    }, 2000);
  }, [props.currentIndex]);

  return (
    <div
      className={`slideshow-image ${
        props.index === props.currentIndex ? "active" : ""
      }`}
    >
      <img src={props.item.img} />
      <div className={`content ${animationActive ? "animation-active" : ""}`}>
        <div className="left">
          <p>Key Features</p>
          {props.item.title}
          <p>Transforming Agriculture with Technology</p>
        </div>
      </div>
    </div>
  );
};
