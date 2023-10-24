import { useState } from "react";
import Loading from "../Utils/Loading";



export default function DeleteNews(props) {
  const [msg, setMsg] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [isError, setIsError] = useState();
  const [loading, setLoading] = useState(false);

 
  
  const deleteNews = (id) => {
    fetch(`/api/news/${props.data.ID}`, {
      method: "DELETE",
      credentials: "include",
    })
      .then((res) => {
        if (res.ok) return res.json();
        else throw Error("");
      })
      .then((data) => {
        setLoading(false);
        setMsg(data.success)
        props.setRefresh(!refresh)
        setTimeout(() => {
          props.setToggleDeleteNews(false)
          window.location.href = "/news"
        }, 500);
      })
    
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  };
  
 

  return (
    <div className="contain">
      <div className="card1">
          <div className="title">
              <h3>Delete News</h3>
              <p className="msg">{msg}</p>
              <p className="err">{isError}</p>
          </div>
          <div className="body">
            <form action="" onSubmit={(e)=>{
              e.preventDefault(e);
              }}>
              <p>Are you sure you want to delete?</p>
              <button onClick= {() => deleteNews()} className="submit delete" >Delete</button>
            </form>
          </div>
          <h4
                title="Close"
                onClick={() => {
                  props.setToggleDeleteNews(false);
                }}
              >Close</h4>
              {loading&&(
                    <div className="ld">
                        <Loading />
                    </div>
                )}
      </div>
    </div>
  );
}

