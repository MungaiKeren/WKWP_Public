import React from "react";
import vector from "../../assets/images/Vector.png";


export default function ExpectedImpact(props) {
    return (
      <div className="impact">
        <h4>Expected Impact</h4>
        <hr />
        <div className="content">
          <div className="left">
            <div>
              <img src={vector} alt="" />
              <p>
                <b>500,000</b>
                People accessing improved basic drinking water services
              </p>
            </div>
            <div>
              <img src={vector} alt="" />
              <p>
                <b>15 million (USD) </b>
                of public and private funding will be available to the sector
              </p>
            </div>
          </div>
          <div className="right">
            <div>
              <img src={vector} alt="" />
              <p>
                Improved service quality to <b>350,000 </b>Kenyans
              </p>
            </div>
            <div>
              <img src={vector} alt="" />
              <p>
                Better Water Resource Manager for the benefit of <b>300,000 </b>
                Kenyans
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}