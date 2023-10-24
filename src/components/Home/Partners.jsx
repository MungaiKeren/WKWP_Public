import React, { useState, useEffect } from "react";
import kr from "../../assets/images/logo.png";
import narigp from "../../assets/images/narigp.png";
import wb from "../../assets/images/wb.png";
import ke from "../../assets/images/kenya.png";
import osl from "../../assets/images/osl.png";
export default function Partners(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [kr, narigp, wb, ke, osl];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="partners">
      <div className="container">
        <h3>Who we work with</h3>
        <h1>Partners</h1>
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
