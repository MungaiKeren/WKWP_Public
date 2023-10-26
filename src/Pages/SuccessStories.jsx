import React from "react";
import "../Styles/success.scss";
import Header from "../components/Utils/header";
import Footer from "../components/Utils/footer";
import img from "../assets/images/girl.png";
import story from "../assets/images/story1.png";
import Partners from "../components/Home/Partners";
import user from "../assets/images/user-icon.png";
import quote from "../assets/images/Quote.png";

export default function SuccessStories() {
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

        <div className="two-equal">
          <div className="imgs">
            <img src={story} className="main-img" alt="" />
            {/* <img src={play} className="play-icon" alt="" /> */}
          </div>
          <div className="right">
            <h5>Data Collection from beneficiaries</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book.
            </p>

            <div className="btn">
              <button>Play Video</button>
            </div>
          </div>
        </div>
      </div>
      <Partners />

      <div className="testimonials">
        <h3>Testimonials</h3>

        <div className="two">
          <div className="wrapper">
            <div className="img">
              <img src={user} alt="" />
            </div>
            <div className="txt">
              <p className="title">Testimony 1</p>
              <p>
                "Thanks to the Western Kenya Water Project, our lives have been
                transformed. We used to walk long distances to fetch water,
                often contaminated. Now, we have access to clean water right in
                our village. It's a game-changer!"
              </p>
            </div>
          </div>

          <div className="wrapper2">
            <div className="txt">
              <p className="title">Testimony 1</p>
              <p>
                "Thanks to the Western Kenya Water Project, our lives have been
                transformed. We used to walk long distances to fetch water,
                often contaminated. Now, we have access to clean water right in
                our village. It's a game-changer!"
              </p>
            </div>
            <div className="img">
              <img src={user} alt="" />
            </div>
          </div>
        </div>
        <div className="wrapper3">
          <div className="img">
            <img src={user} alt="" />
          </div>
          <div className="txt">
            <p className="title">Testimony 1</p>
            <p>
              "Thanks to the Western Kenya Water Project, our lives have been
              transformed. We used to walk long distances to fetch water, often
              contaminated. Now, we have access to clean water right in our
              village. It's a game-changer!"
            </p>
          </div>
        </div>
      </div>

      <div className="profiles">
        <h3>Featured Profiles</h3>
        <hr />

        <div className="two-equal">
          <FeaturedProfiles />
          <FeaturedProfiles />
          <FeaturedProfiles />
          <FeaturedProfiles />
        </div>
      </div>
      <Footer />
    </div>
  );
};


const FeaturedProfiles = () => {
    return (
      <div className="item">
        <div className="quote">
            <img src={quote} alt="" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </p>
        </div>

        <div className="person">
          <div className="image">
            <img src={user} height={30} alt="" />
          </div>
          <div className="txt">
            <p className="name">Japheth Mbuvi</p>
            <p>WKWP Chief of Party</p>
          </div>
        </div>
      </div>
    );
};
