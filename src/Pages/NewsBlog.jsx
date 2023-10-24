import "../Styles/news.scss";
import { useEffect, useState } from "react";
import Header from "../components/Utils/header";
import placeholder from "../assets/images/placeholder.jpg";
import Footer from "../components/Utils/footer";
import NewsHero from "../components/News/NewsHero";
import Pagination from "../components/Utils/Pagination";
import WaveLoading from "../components/Utils/WaveLoading";
import { useRef } from "react";

export default function NewsBlog(props) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [filter, setFilter] = useState("All");
  const [refresh, setRefresh] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const srch = useRef();
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    if (filter == "All") {
      setLoading(true);
      fetch(`/api/news/paginated/${(currentPage - 1) * 12}`)
        .then((res) => {
          if (res.ok) return res.json();
          else throw Error("");
        })
        .then((data) => {
          setLoading(false);
          setData(data);
        })
        .catch((e) => {
          setLoading(false);
        });
    } else {
      setLoading(true);
      fetch(`/api/news/type/${filter}/${(currentPage - 1) * 12}`)
        .then((res) => {
          if (res.ok) return res.json();
          else throw Error("");
        })
        .then((data) => {
          setLoading(false);
          setData(data);
        })
        .catch((e) => {
          setLoading(false);
        });
    }
  }, [currentPage, refresh, filter]);

  function search(q) {
    setLoading(true);
    fetch(`/api/news/search/${q}`)
      .then((res) => {
        if (res.ok) return res.json();
        else throw Error("");
      })
      .then((data) => {
        setLoading(false);
        setData(data);
      })
      .catch((e) => {
        setLoading(false);
      });
  }

  return (
    <div className="NewsBlog">
      <Header />
      <NewsHero />
      <div className="slist">
        <h1>News, Events, and Notifications</h1>
        <div className="container">
          <div className="left">
            <Category
              txt="All"
              filter={filter}
              setFilter={setFilter}
              setCurrentPage={setCurrentPage}
            />
            <Category
              txt="News"
              filter={filter}
              setFilter={setFilter}
              setCurrentPage={setCurrentPage}
            />
            <Category
              txt="Public Notices"
              filter={filter}
              setFilter={setFilter}
              setCurrentPage={setCurrentPage}
            />
            <Category
              txt="Events"
              filter={filter}
              setFilter={setFilter}
              setCurrentPage={setCurrentPage}
            />
            <Category
              txt="Other"
              filter={filter}
              setFilter={setFilter}
              setCurrentPage={setCurrentPage}
            />
          </div>
          <div className="right">
            <div className="top">
              <p>Search by Title</p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <input
                  ref={srch}
                  type="text"
                  placeholder="Type to search"
                  required
                  onChange={(e) => {
                    if (e.target.value == "") {
                      setData(null);
                      setRefresh(!refresh);
                    }
                  }}
                />
                <button
                  onClick={() => {
                    if (srch.current.value != "") {
                      search(srch.current.value);
                    }
                  }}
                >
                  <i className="fa fa-search"></i>
                </button>
              </form>
            </div>
            <div className="list">
              {data &&
                data?.data.length > 0 &&
                data?.data.map((item, i) => {
                  return <Document key={i} item={item} />;
                })}
            </div>
            {data && (
              <Pagination
                totalItems={data.total}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            )}
          </div>
        </div>
        {loading && <WaveLoading />}
      </div>
      <Footer />
    </div>
  );
}

const Category = (props) => {
  return (
    <div
      onClick={() => {
        props.setFilter(props.txt);
        props.setCurrentPage(1);
      }}
      style={{
        backgroundColor: props.txt == props.filter ? "#60606030" : "white",
      }}
      className="category"
    >
      <p>{props.txt}</p>
    </div>
  );
};

const Document = (props) => {
  return (
    <div className="nstk">
      <img
        src={"/api/" + props.item.Image.replaceAll("\\", "/")}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = placeholder;
        }}
        alt=""
      />
      <div className="ntp">
        <h3>{props.item.Title}</h3>
        <p>Date: {props.item.createdAt.split("T")[0]}</p>

        <h4>Category: {props.item.Type}</h4>
        <p>{props.item.Description}</p>
        <a href={"/news/" + props.item.ID}>
          Read More <i className="fa fa-angle-right"></i>
        </a>
      </div>
    </div>
  );
};
