import React from "react";
import Map from '../../assets/images/Map.png';

export default function Counties(props) {
    return (
        <div className="counties">
            <div className="left">
                <img src={Map} alt="" />
            </div>
            <div className="right">
                <h4>Counties of Operation</h4>
                <hr />
                <div className="two-equal">
                    <div>
                        <p>Bungoma</p>
                        <p>Busia</p>
                        <p>Kakamega</p>
                        <p>Siaya</p>
                    </div>
                    <div>
                        <p>Homa Bay</p>
                        <p>Kisii</p>
                        <p>Kisumu</p>
                        <p>Migori</p>
                    </div>
                </div>
            </div>
        </div>
    )
}