import "../Styles/publications.scss";
import { useEffect, useState } from "react";
import Header from "../components/Utils/header";
import Footer from "../components/Utils/footer";
import { useRef } from "react";
import Pagination from "../components/Utils/Pagination";
import WaveLoading from "../components/Utils/WaveLoading";
import { FiDownload } from "react-icons/fi";

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
    if (filter === "All") {
      setLoading(true);
      fetch(`/api/publications/paginated/${(currentPage - 1) * 12}`)
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
      fetch(`/api/publications/type/${filter}/${(currentPage - 1) * 12}`)
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
    fetch(`/api/publications/search/${q}/${(currentPage - 1) * 12}`)
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
    <div className="publications">
      <Header active="Publications" />
      <div className="slist">
        <h1>Publications: Inside Stories and Interviews</h1>

        <hr />
        <div className="container">
          <div className="left">
            <div className="top">
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
                    if (srch.current.value != "") {
                      search(srch.current.value);
                    }
                  }}
                >
                  <i className="fa fa-search"></i>
                </button>
              </form>
            </div>

            <div className="categs">
              <Category
                txt="All"
                filter={filter}
                setFilter={setFilter}
                setCurrentPage={setCurrentPage}
              />
              <Category
                txt="Urban Water Services"
                filter={filter}
                setFilter={setFilter}
                setCurrentPage={setCurrentPage}
              />
              <Category
                txt="Rural water Services"
                filter={filter}
                setFilter={setFilter}
                setCurrentPage={setCurrentPage}
              />
              <Category
                txt="Water Resources Management"
                filter={filter}
                setFilter={setFilter}
                setCurrentPage={setCurrentPage}
              />
              <Category
                txt="Finance & Private Sector"
                filter={filter}
                setFilter={setFilter}
                setCurrentPage={setCurrentPage}
              />
              <Category
                txt="Policy & Governance"
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
          </div>
          <div className="right">
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
    <div className="pub">
      <div className="stk">
        <div className="lft">
          <img src={"/api/uploads/" + props.item.File.replaceAll("\\", "/")} alt="" />
        </div>
        <div className="rght">
          <h3>{props.item.Title}</h3>
          <p>{props.item.Description.substring(0, 500)}</p>
        </div>
      </div>
      <div className="more">
        <a href="#" className="btn">
          Download PDF &nbsp;&nbsp;
          <FiDownload />
        </a>
      </div>
    </div>
  );
};

// "/api/" + props.item.Image.replaceAll("\\", "/")