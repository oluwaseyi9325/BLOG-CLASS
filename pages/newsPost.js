import axios from "axios";
import React, { useState, useRef } from "react";
import { ClipLoader } from "react-spinners";
function newsPost() {
  const [body, setBody] = useState("");

  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const cat_ref = useRef();
  const [loader, setLoader] = useState(false);

  const btn = () => {
    let category = cat_ref.current.value;
    let news_ref = Math.floor(Math.random() * 1000000000);

    if (body && description && imageUrl && category && news_ref) {
      setLoader(true);

      const details = { body, description, imageUrl, category, news_ref };

      axios
        .post("http://localhost:5000/posts", details)
        .then((res) => {
          if (res.data) {
            setLoader(false);
            
            setBody("");
            setDescription("");
            setImageUrl("");
            cat_ref.current.value = "";
          }else{
            setLoader(false)
            alert("Please try again")
          }
        })
        .catch((err) => {
          setLoader(false);
          alert("Please try again")
        });
    } else {
      alert("Please fill all the fields");
    }
  };
  return (
    <div>
      <div className="container-fluid mt-5">
        <h4 className="text-center">News Form</h4>
        <div className="row">
          <div className="col-lg-7 col-md-12 mx-auto bg-secondary rounded-3">
            <section className="rounded-4 p-3">
              <div className="row ">
                <div className="col-6">
                  <input
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="Image url"
                    className="form-control"
                  />
                  <select ref={cat_ref} className="form-control mt-3">
                    <option value="">Category</option>
                    <option value="education">Education</option>
                    <option value="sport">Sport</option>
                    <option value="politics">Politics</option>
                  </select>
                </div>
                <div className="col-6">
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={3}
                    style={{ resize: "none" }}
                    placeholder="News Desciption"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="mt-3">
                <textarea
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  style={{ resize: "none" }}
                  placeholder="type the new body here"
                  className="form-control"
                  rows={10}
                ></textarea>
              </div>
              <div className="d-flex justify-content-center mt-3">
                <ClipLoader loading={loader} color="white" size={50} />
                <button
                  onClick={btn}
                  className="btn btn-lg btn-info text-white rounded-3"
                >
                  ADD NEWS
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default newsPost;
