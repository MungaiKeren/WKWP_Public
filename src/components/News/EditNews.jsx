import { useRef, useState } from "react";
import NewsInput from "./NewsInput";
import Loading from "../Utils/Loading";


export default function EditNews(props){
    const rfEmail = useRef();
    const rfTitle = useRef();
    const rfImage = useRef();
    const rfType = useRef();
    const rfDescription = useRef();
    const rfKeywords = useRef()
    const rfLink = useRef();
    const [msg, setMessage] = useState();
    const [isError, setIsError] = useState();
    const [loading, setLoading] = useState(false);
    const [body, updateBody] = useState({
        Title: null,
    });

    const editNews = () => {
        let d = body;
        d.Title = rfTitle.current.getValue();
        d.Type = rfType.current.getValue();
        d.Image = rfImage.current.files[0];
        d.Description = rfDescription.current.value;
        d.Keywords = rfKeywords.current.getValue();
        d.Link = rfLink.current.getValue();
        updateBody(d);


        const validateBody= () => {
            let result = true;
            if (!body.Title) {
              result = false;
              setIsError("Please Enter a title!");
              setLoading(false);
              return result;
            }
            
            if (!body.Type) {
              result = false;
              setIsError("Type is required!");
              setLoading(false);
              return result;
            }
            if (!body.Description) {
              result = false;
              setIsError("Write a description!");
              setLoading(false);
              return result;
            }
            if (!body.Keywords) {
              result = false;
              setIsError("Enter a valid keyword");
              setLoading(false);
              return result;
            }
            if (!body.Link) {
              result = false;
              setIsError("Link is required!");
              setLoading(false);
              return result;
            }
            return result;
          };

        if (validateBody()){
          const formData = new FormData();

          for (const i in body) {
            formData.append(i, body[i]);
          }
            setLoading(true);
            fetch(`/api/news/${props.data.ID}`, {
              method: "PUT",
              credentials: "include",
              headers: {
                Accept: "application/json",
              },
              body: formData,
            })
              .then((res) => {
                if (res.ok) return res.json();
                else throw Error("Failed");
              })
              .then((data) => {
                if (data.success) {
                  setLoading(false);
                  props.setRefresh(!props.refresh)
                  return setMessage(data.success);
                } else {
                  setLoading(false);
                  return setIsError(data.error);
                }
              })
              .catch((error) => {
                setLoading(false);
                setIsError(error);
              });
        };
    };

    const verifyEmail = (email) => {
        return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    }

    return (
        <div className="contain">
            <div className="card1">
                <div className="title">
                    <h3>Edit News</h3>
                    <p className="msg">{msg}</p>
                    <p className="err">{isError}</p>
                </div>
                <div className="body">
                    <form action="" onSubmit={(e)=>{
                        e.preventDefault(e);
                    }}>
                        <NewsInput ref={rfTitle} type="text" label="Title " defaultValue={props.data.Title}/>
                        <div className="newsinput">
                          <label for="upload-photo">
                            <h4>
                              Browse Images<span> *</span>
                            </h4>
                            <input
                              ref={rfImage}
                              type="file"
                              accept="image/png, image/gif, image/jpeg"
                              // defaultValue={props.data.Image.split("/")[2]}
                            />
                          </label>
                        </div>
                        <NewsInput ref={rfType} type="text" label="Type " defaultValue={props.data.Type}/>
                        <div className="newsinput">
                          <h4>
                            Descption
                          </h4>
                          <textarea
                            ref={rfDescription}
                            className="input textarea"
                            type="textarea"
                            label="Description "
                            required=" *"
                            defaultValue={props.data.Description}
                          />
                        </div>
                        <NewsInput ref={rfKeywords} type="text" label="Keywords" defaultValue={props.data.Keywords}/>
                        <NewsInput ref={rfLink} type="text" label="Link" defaultValue={props.data.Link}/>
                        <button className="submit" onClick={()=>{
                            editNews();
                        }}>Submit</button>
                    </form>
                </div>
                <h4 onClick={()=>{
                    props.setToggleEditNews(false);
                }}>Close</h4>
                {loading&&(
                    <div className="ld">
                        <Loading />
                    </div>
                )}
            </div>
        </div>
    )
}