import "../Styles/arc.scss";
import { useEffect, useState } from "react";
import Header from "../components/Utils/header";
import placeholder from "../assets/images/placeholder.jpg";
import Hero from "../components/Home/Hero";
import Footer from "../components/Utils/footer";
import WaveLoading from "../components/Utils/WaveLoading";
import { useRef } from "react";
import Pagination from "../components/Utils/Pagination";
import { pdfjs } from "react-pdf";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
import ARCHero from "../components/ARC/ARCHero";
pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

export default function ARC(props) {
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
      fetch(`/api/documents/dpaginated/${(currentPage - 1) * 12}`)
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
      fetch(`/api/documents/type/${filter}/${(currentPage - 1) * 12}`)
        .then((res) => {
          if (res.ok) return res.json();
          else throw Error("");
        })
        .then((data) => {
          setLoading(false);
          console.log(data);
          setData(data);
        })
        .catch((e) => {
          setLoading(false);
        });
    }
  }, [currentPage, refresh, filter]);

  function search(q) {
    setLoading(true);
    fetch(`/api/documents/search/${q}`)
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
    <div className="arc">
      <Header />
      <ARCHero />
      <div className="slist">
        <h1>Agricultural Resource Center</h1>
        <div className="container">
          <div className="left">
            <Category
              txt="All"
              filter={filter}
              setFilter={setFilter}
              setCurrentPage={setCurrentPage}
            />
            <Category
              txt="Manuals"
              filter={filter}
              setFilter={setFilter}
              setCurrentPage={setCurrentPage}
            />
            <Category
              txt="Reports"
              filter={filter}
              setFilter={setFilter}
              setCurrentPage={setCurrentPage}
            />
            <Category
              txt="Publications"
              filter={filter}
              setFilter={setFilter}
              setCurrentPage={setCurrentPage}
            />
            <Category
              txt="Learning Materials"
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
                  return <MyDocument key={i} item={item} />;
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
const MyDocument = (props) => {
  const [blob, setBlob] = useState(null);
  const [firstPageBlob, setFirstPageBlob] = useState(null);

  useEffect(() => {
    if (blob) {
      const fetchPdfFirstPage = async () => {
        try {
          const pdf = await pdfjs.getDocument(blob).promise;
          const page = await pdf.getPage(1);
          const viewport = page.getViewport({ scale: 0.5 });
          const canvas = document.createElement("canvas");
          const canvasContext = canvas.getContext("2d");
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          await page.render({ canvasContext, viewport }).promise;
          console.log(canvas.toDataURL());
          setFirstPageBlob(canvas.toDataURL());
        } catch (error) {
          console.error("Error loading PDF:", error);
        }
      };

      fetchPdfFirstPage();
    }
  }, [blob]);

  useEffect(() => {
    fetch(`/api/uploads/${props.item.File}`)
      .then((res) => {
        if (res.ok) return res.blob();
        else throw Error("");
      })
      .then((blob) => {
        if (blob) {
          const url = window.URL.createObjectURL(blob);
          setBlob(url);
          return () => {
            window.URL.revokeObjectURL(url);
          };
        }
      })
      .catch((e) => {});
  }, []);

  return (
    <div className="stk">
      {firstPageBlob ? (
        <img src={firstPageBlob} alt="" />
      ) : (
        <img src={placeholder} alt="" />
      )}
      <div className="np">
        <div className="tp">
          <h3>{props.item.Title}</h3>
        </div>
        <br />
        <p>{props.item.Description}</p>
        <p>Category: {props.item.Type}</p>
        {blob && (
          <a title="Download File" href={blob} target="_blank">
            View/Download <i className="fa fa-file-pdf-o">&#xf1c1;</i>
          </a>
        )}
      </div>
    </div>
  );
};
