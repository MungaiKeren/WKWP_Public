import React from "react";
import user from "../../assets/images/user-icon.png"

export default function Testimonials(props) {
  return (
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
              transformed. We used to walk long distances to fetch water, often
              contaminated. Now, we have access to clean water right in our
              village. It's a game-changer!"
            </p>
          </div>
        </div>

        <div className="wrapper2">
          <div className="txt">
            <p className="title">Testimony 2</p>
            <p>
              "Thanks to the Western Kenya Water Project, our lives have been
              transformed. We used to walk long distances to fetch water, often
              contaminated. Now, we have access to clean water right in our
              village. It's a game-changer!"
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
          <p className="title">Testimony 3</p>
          <p>
            "Thanks to the Western Kenya Water Project, our lives have been
            transformed. We used to walk long distances to fetch water, often
            contaminated. Now, we have access to clean water right in our
            village. It's a game-changer!"
          </p>
        </div>
      </div>
    </div>
  );
}
