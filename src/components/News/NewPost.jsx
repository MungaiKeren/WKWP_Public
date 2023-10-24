import { useRef, useState } from "react";
import Button from "../Utils/Button";
import Loading from "../Utils/Loading";
import UserInput from "../Utils/UserInput";
import UserSelect from "../Utils/UserSelect";


export default function NewPost(props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const title = useRef();
  const image = useRef();
  const type = useRef();
  const description = useRef();
  const keywords = useRef();
  const link = useRef();

  const createNews = () => {
    console.log(description);
    const body = {
      Title: title.current.getValue(),
      Image: image.current.files[0],
      Type: type.current.getValue(),
      Description: description.current.value,
      Keywords: keywords.current.getValue(),
      Link: link.current.getValue(),
    };
    setLoading(true);
    setError("");

    const validateForm = () => {
      let result = true;
      if (!body.Title) {
        result = false;
        setError("Please Enter a title!");
        setLoading(false);
        return result;
      }

      if (!body.Type) {
        result = false;
        setError("Type is required!");
        setLoading(false);
        return result;
      }
      if (!body.Description) {
        result = false;
        setError("Write a description!");
        setLoading(false);
        return result;
      }
      if (!body.Keywords) {
        result = false;
        setError("Enter a valid keyword");
        setLoading(false);
        return result;
      }
      if (!body.Link) {
        result = false;
        setError("Link is required!");
        setLoading(false);
        return result;
      }
      return result;
    };

    if (validateForm()) {
      const formData = new FormData();

      for (const i in body) {
        formData.append(i, body[i]);
      }

      fetch(`/api/news/create`, {
        method: "POST",
        credentials: "include",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else throw Error("");
        })
        .then((data) => {
          console.log(data);
          setLoading(false);
          if (data.success) {
            setError(data.success);
          } else {
            setError(data.error);
          }
        })
        .catch((err) => {
          setLoading(false);
        });
    }
  };

  return (
    <div className="newscreate">
      <div className="list">
        <h3>New Post</h3>
        <hr />
        <div className="new">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <UserInput ref={title} type="text" label="Title " required=" *" />
            <div className="input">
              <h4>
                Browse Images<span> *</span>
              </h4>
              <input
                ref={image}
                type="file"
                accept="image/png, image/gif, image/jpeg"
              />
            </div>
            <UserSelect
              ref={type}
              label="Category "
              required=" *"
              data={["Extension Services", "Farming", "Others"]}
            />
            <div className="input">
              <h4>
                Descption <span> *</span>
              </h4>
              <textarea
                ref={description}
                type="textarea"
                label="Description "
                required=" *"
              />
            </div>
            <UserInput
              ref={keywords}
              type="text"
              label="Keywords "
              required=" *"
            />
            <UserInput ref={link} type="text" label="Link " required=" *" />
            <h6>{error}</h6>
            <Button handleClick={createNews} value="Submit" required=" *" />
          </form>
          {loading && <Loading />}
        </div>
      </div>
    </div>
  );
}
