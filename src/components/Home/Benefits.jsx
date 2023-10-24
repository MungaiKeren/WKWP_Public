import scalable from "../../assets/images/scalable.png";
import improvement from "../../assets/images/improvement.png";
import simplicity from "../../assets/images/simplicity.png";
import secure from "../../assets/images/secure.png";
import { useState } from "react";

export default function Benefits(props) {
  return (
    <div className="benefits">
      <div className="container">
        <h3>Why Kiri AMIS</h3>
        <h1>Our Offering</h1>
        <div className="ssections">
          <Section
            txt="Simplicity"
            desc="Kiri AMIS offers a user-friendly interface, making it easy for farmers and agricultural professionals to navigate and utilize its powerful features."
            img={simplicity}
          />
          <Section
            txt="Data Security"
            desc=" Monitor crop growth, health, and yield through advanced sensors and remote sensing technologies. Receive real-time alerts and insights to optimize crop management."
            img={secure}
          />
          <Section
            txt="Scalability"
            desc="Kiri AMIS is designed to accommodate the needs of individual farmers, large agricultural enterprises, and research institutions alike."
            img={scalable}
          />
          <Section
            txt="Continuous Improvement"
            desc="We are committed to constantly enhancing AIMS based on user feedback and incorporating the latest advancements in agricultural technology."
            img={improvement}
          />
        </div>
      </div>
    </div>
  );
}

const Section = (props) => {
  const [isFlipped, setIsFlipped] = useState(true);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flip-card">
      <div className={`flip-card-inner`}>
        <div className="flip-card-front">
          <div>
            <img src={props.img} alt="" />
            <h3>{props.txt}</h3>
          </div>
        </div>

        <div className="flip-card-back">
          <div>
            <p>{props.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
