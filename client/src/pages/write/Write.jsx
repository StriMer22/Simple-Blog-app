import React from "react";
import "./write.css";
import { AiOutlineFileAdd } from "react-icons/ai";
import PostImg from "../../assets/posts.jpg";

export default function Write() {
  return (
    <div className="write">
      <img className="writeImg" src={PostImg} alt="dog" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <AiOutlineFileAdd />
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            className="writeInput"
            autoFocus={true}
            type="text"
            placeholder="Title"
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Your story..."
            type="text"
            className="writeText writeInput"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
