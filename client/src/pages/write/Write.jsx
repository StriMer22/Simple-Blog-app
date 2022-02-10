import React, { useContext, useState } from "react";
import "./write.css";
import { AiOutlineFileAdd } from "react-icons/ai";
import axios from "axios";
import { Context } from "../../context/Context";

export default function Write() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newPost = {
      username: user.username,
      title,
      description,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };

  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="dog" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <AiOutlineFileAdd />
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(event) => setFile(event.target.files[0])}
          />
          <input
            className="writeInput"
            autoFocus={true}
            type="text"
            placeholder="Title"
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Your story..."
            type="text"
            className="writeText writeInput"
            onChange={(event) => setDescription(event.target.value)}
          ></textarea>
        </div>
        <div className="submitPost">
          <button className="writeSubmit" type="submit">
            Publish
          </button>
        </div>
      </form>
    </div>
  );
}
