import React, { useState, useEffect } from "react";
import usaid from "../../assets/images/usaid_logo.png";
import wkwp from "../../assets/images/wkwp_logo.png";
import dai from "../../assets/images/DAI-logo.png";
import osl from "../../assets/images/osl.png";


export default function Partners(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [usaid, wkwp, dai, osl];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="partners">
      <div className="container">
        <h1>Our Partners</h1>
        <div className="slideshow-container">
          <div
            className="slideshow-track"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`, // Adjust the translation direction (horizontal)
            }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                className="slideshow-slide"
                src={image}
                alt={`Slide ${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
