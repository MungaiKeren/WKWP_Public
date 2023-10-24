import React from "react";
import person from "../../assets/images/person.png";

export default function Testimony(props) {
  return (
    <div className="test_content">
      <div className="tst">
        <div className="testimony-author">
          <img src={person} alt="" />
          <h3>{props.item.author}</h3>
        </div>
        <div className="testimony-content">
          <h3 className="testimony-title">{props.item.title}</h3>
          <p>{props.item.content}</p>
        </div>
      </div>
    </div>
  );
}
