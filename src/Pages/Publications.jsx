import "../Styles/publications.scss";
import { useEffect, useState } from "react";
import Header from "../components/Utils/header";
import BlogPost from "../components/News/BlogPost";
import Hero from "../components/Home/Hero";
import Footer from "../components/Utils/footer";
import logo from "../assets/images/wb.png";
import { useRef } from "react";
import Pagination from "../components/Utils/Pagination";
import WaveLoading from "../components/Utils/WaveLoading";

export default function Publications(props) {
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
      fetch(`/api/stakeholders/paginated/${(currentPage - 1) * 12}`)
        .then((res) => {
          if (res.ok) return res.json();
          else throw Error("");
        })
        .then((data) => {
          console.log(data);
          setData(data);
          setLoading(false);
        })
        .catch((e) => {
          setLoading(false);
        });
    } else {
      setLoading(true);
      fetch(`/api/stakeholders/type/${filter}/${(currentPage - 1) * 12}`)
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
    fetch(`/api/stakeholders/search/${q}`)
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
    <div className="stakeholders">
      <Header />
      <div className="slist">
        <h1>Publications: Inside Stories and Interviews</h1>
        <div className="container">
          <div className="left">
            <Category
              txt="All"
              filter={filter}
              setFilter={setFilter}
              setCurrentPage={setCurrentPage}
            />
            <Category
              txt="Donors"
              filter={filter}
              setFilter={setFilter}
              setCurrentPage={setCurrentPage}
            />
            <Category
              txt="Partners"
              filter={filter}
              setFilter={setFilter}
              setCurrentPage={setCurrentPage}
            />
            <Category
              txt="Service Providers"
              filter={filter}
              setFilter={setFilter}
              setCurrentPage={setCurrentPage}
            />
            <Category
              txt="NGOs"
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
                data?.data?.length > 0 &&
                data?.data?.map((item, i) => {
                  return <Stakeholder key={i} item={item} />;
                })}
            </div>
            {data && (
              <Pagination
                totalItems={data?.total}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            )}
          </div>
          {loading && <WaveLoading />}
        </div>
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
      className="category"
    >
      <p>{props.txt}</p>
    </div>
  );
};

const Stakeholder = (props) => {
  return (
    <div className="stk">
      <div className="tp">
        <img src={"/api/" + props.item.Image.replaceAll("\\", "/")} alt="" />
        <h3>{props.item.Title}</h3>
      </div>
      <br />
      <p>{props.item.Description}</p>
      <p>Category: {props.item.Type}</p>
      <a title="Visit Website" href={props.item.Link}>
        <i className="fa fa-globe"></i>
      </a>
    </div>
  );
};
