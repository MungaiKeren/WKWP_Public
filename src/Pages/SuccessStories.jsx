import React, {useState} from "react";
import "../Styles/success.scss";
import Header from "../components/Utils/header";
import Footer from "../components/Utils/footer";
import img from "../assets/images/girl.png";
import story from "../assets/images/story1.png";
import play from "../assets/images/play icon.png";
import Partners from "../components/Home/Partners";
import Testimonials from "../components/Success/Testimonials";
import FeaturedProfiles from "../components/Success/FeaturedProfiles";


const YouTubePopup = ({ videoId, onClose }) => {
  return (
    <div className="youtube-popup">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/1cz-quNS3n8?si=qUNhy6wdPAiY5lDI`}
          title="YouTube Video"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default function SuccessStories() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <div className="success">
      <Header active="Success Stories" />
      <div className="hero">
        <img src={img} alt="" />
        <div className="content">
          <h4>
            "Clean water is the cornerstone of success, shaping healthier lives
            and brighter tomorrows."
          </h4>
        </div>
      </div>

      <div className="vids">
        <h4>
          Success <span>Stories</span>
        </h4>

        {isPopupOpen && <YouTubePopup onClose={closePopup} />}
        <div className="two-equal">
          <div className="left">
            <img src={story} className="main-img" alt="" />
            <img src={play} onClick={openPopup} className="play-icon" alt="" />
          </div>
          <div className="right">
            <h5>Data Collection from beneficiaries</h5>
            <p>
              In the remote village of Bonde, plagued by waterborne diseases and
              water scarcity, the Water for Life NGO spearheaded a
              transformative project. By drilling a borehole, installing a
              network of pipes, and engaging the community in hygiene and water
              management education, the NGO provided accessible clean water.
              This endeavor drastically reduced disease incidences, empowered
              the community, improved school attendance, and enhanced overall
              quality of life, showcasing the profound impact of clean water
              access on transforming lives and entire communities.
            </p>

            <div className="btn">
              <button onClick={openPopup}>Play Video</button>
            </div>
          </div>
        </div>
      </div>

      <Partners />
      <Testimonials />
      <FeaturedProfiles />
      <Footer />
    </div>
  );
};



