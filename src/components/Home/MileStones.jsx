import React from "react";
import rectangle from "../../assets/images/Rectangle 57.png";
import tap from "../../assets/images/tapIcon.png";

const Item = (props) => {
    return (
      <div className="item">
        <div className="stats">
          <div className="left">
            <h3>{props.number}</h3>
            <img src={tap} alt="" />
          </div>
          <div className="right">
            <p className="p">
              {props.text1}
            </p>
            <p>
              {props.text2}
            </p>
          </div>
        </div>
      </div>
    );
}


export default function MileStones(props) {
    return (
      <div className="milestones">
        <h4>Milestones</h4>
        <hr />

        <div className="two-equal">
          <Item
            number="95%"
            text1="People Accessing Water against the annual target"
            text2="47,362 people accessing basic drinking water against the annual target of 50,000"
          />
          <Item
            number="5"
            text1="Water Assembly Committees Sensitized on"
            text2="47,362 people accessing basic drinking water against the annual target of 50,000"
          />
          <Item
            number="USD$ 826k"
            text1="Increase in water sector budget allocation for Migori"
            text2="From USD$ 2,104,341 to USD$ 826,215 in the FY 2023/2024 following sensitization on the water sector budgeting."
          />
          <Item
            number="200"
            text1="Conducted survey of baseline of Rural Water Schemes"
            text2="Rural water schemes aimed at establishing gaps, to inform the design of capacity"
          />
          <Item
            number="USD 58k"
            text1="Saved in Cost Share Allocation"
            text2="$21,255 for activities undertaken and $15,114 for county office space for embedded staff between Sept 2022 - March 2023"
          />
          <Item
            number="127"
            text1="Staff trained on WASREB Rural Water Management Guidelines & Service Delivery Models"
            text2="47,362 people accessing basic drinking water against the annual target of 50,000"
          />
        </div>
      </div>
    );
}