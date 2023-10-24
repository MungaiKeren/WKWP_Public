import React, { useEffect, useState } from "react";
import bg3 from "../../assets/images/n1.png";
import bg2 from "../../assets/images/n2.jpg";
import bg1 from "../../assets/images/n3.jpg";

export default function NewsHero(props) {
  const content = [
    {
      title: <h1>Agricultural News</h1>,
      img: bg1,
      desc: "We collect and analyze data on crops, weather patterns, soil conditions, pests, and more to make informed decisions and improve agricultural practices",
    },
    {
      title: <h1>Agricultural Events</h1>,
      img: bg2,
      desc: "Monitor crop growth, health, and yield through advanced sensors and remote sensing technologies. Receive real-time alerts and insights to optimize crop management.",
    },
    {
      title: <h1>Notifications from the department</h1>,
      img: bg3,
      desc: "Efficiently track and manage inventory, including seeds, fertilizers, and equipment, ensuring smooth operations and minimizing waste.",
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
