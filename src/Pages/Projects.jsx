import "../Styles/projects.scss";
import { useEffect, useState } from "react";
import Header from "../components/Utils/header";
import Hero from "../components/Home/Hero";
import Footer from "../components/Utils/footer";
import { useRef } from "react";
import Pagination from "../components/Utils/Pagination";
import WaveLoading from "../components/Utils/WaveLoading";

export default function Projects(props) {
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
    if (filter === "All") {
      setLoading(true);
      fetch(`/api/projects/paginated/${(currentPage - 1) * 12}`)
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
      fetch(`/api/projects/type/${filter}/${(currentPage - 1) * 12}`)
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
    fetch(`/api/projects/search/${q}`)
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
    <div className="projects">
      <Header />
      <Hero />
      <div className="slist">
        <h1>Projects</h1>
        <div className="container">
          <div className="left">
            <Category
              txt="All"
              filter={filter}
              setFilter={setFilter}
              setCurrentPage={setCurrentPage}
            />
            <Category
              txt="Internal Projects"
              filter={filter}
              setFilter={setFilter}
              setCurrentPage={setCurrentPage}
            />
            <Category
              txt="Partner Projects"
              filter={filter}
              setFilter={setFilter}
              setCurrentPage={setCurrentPage}
            />
             <Category
              txt="National GVT Projects"
              filter={filter}
              setFilter={setFilter}
              setCurrentPage={setCurrentPage}
            />
            <Category
              txt="Donor Projects"
              filter={filter}
              setFilter={setFilter}
              setCurrentPage={setCurrentPage}
            />
            <Category
              txt="NGOs Projects"
              filter={filter}
              setFilter={setFilter}
              setCurrentPage={setCurrentPage}
            />

            <Category
              txt="Others"
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
                    if (e.target.value === "") {
                      setData(null);
                      setRefresh(!refresh);
                    }
                  }}
                />
                <button
                  onClick={() => {
                    if (srch.current.value !== "") {
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
                  return <Project key={i} item={item} />;
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

const Project = (props) => {
  return (
    <div className="stk">
      <div className="tp">
        <img src={"/api/" + props.item.Image.replaceAll("\\", "/")} alt="" />
        <h3>{props.item.Title}</h3>
      </div>
      <br />
      <p>{props.item.Description}</p>
      <p>Category: {props.item.Type}</p>
    </div>
  );
};
