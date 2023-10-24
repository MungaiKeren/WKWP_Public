import React from "react";
import Header from "../components/Utils/header";
import Footer from "../components/Utils/footer";
import "../../src/App.scss";
export default function Portal() {
    return(
        <div>
            <div className="headings">
                <Header/>
            </div>
            <div className="home">
                <p>Not Found Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta blanditiis minus veritatis ratione nam. Sit, maxime quaerat voluptas assumenda nesciunt voluptatum eum repellat ipsa quam officiis corporis alias sunt nihil!</p>
            </div>
                
            <Footer />
        </div>
    )
}