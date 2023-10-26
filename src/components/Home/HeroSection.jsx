import React from "react";
import img from "../../assets/images/people.png";
import tap from "../../assets/images/Tap.png";
import vessel from "../../assets/images/vessel.png";

export default function HeroSection(props) {
    return (
      <div className="hero-section">
        <img src={img} alt="" />
        <div className="content">
          <div className="row">
            <div className="left">
              <div>
                <img src={tap} alt="" />
                <p>
                  Increase the availability and access to rural and urban water
                  services
                </p>
              </div>
              <div>
                <img src={vessel} alt="" />
                <p>Sustainable management of water resources</p>
              </div>
            </div>

            <div className="right">
              <h2>
                Welcome to the Western Kenya Water Project Monitoring, Learning,
                and Knowledge Management Information System (MEL-MIS){" "}
              </h2>

              <div className="portals">
                <button
                  className="dashboard"
                  onClick={() => {
                    window.location.href =
                      "https://dashboard-melmis.dat.co.ke/";
                  }}
                >
                  Dashboard
                </button>
                <button
                  className="KMI"
                  onClick={() => {
                    window.location.href = "https://kmi-melmis.dat.co.ke/";
                  }}
                >
                  Knowledge Management Information
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};