import NewPost from "../components/News/NewPost";
import Header from "../components/Utils/header";
import "../Styles/singlepost.scss";

import React, { useEffect, useState } from "react";
import EditNews from "../components/News/EditNews";
import placeholder from "../assets/images/placeholder.jpg";
import Footer from "../components/Utils/footer";

export default function PublicationSingleInstance(props) {
  const [data, setData] = useState(null);
  const [refresh, setRefresh] = useState();

  useEffect(() => {
    let url = window.location.href.split("/")[4];
    fetch(`/api/news/${url}`)
      .then((res) => {
        if (res.ok) return res.json();
        else throw Error("");
      })
      .then((data) => {
        setData(data);
      })
      .catch((e) => {});
  }, [refresh]);

  return (
    <div className="listnews">
      <Header active="Publications" />
      <div className="singleInstance">
        {data && (
          <div className="container">
            <div>
              <img src={placeholder} alt="" />
            </div>

            <div className="content">
              <h3>{data.Title}</h3>
              <div className="dt">
                <h5>Category: {data.Type}</h5>
                <h5>Date: {data.createdAt.split("T")[0]}</h5>
              </div>

              <img src={`/api/${data.Image}`} alt={data.Title} />
              <p>{data.Description}</p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
