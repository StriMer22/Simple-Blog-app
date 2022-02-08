import React from "react";
import "./singlePost.css";
import { BiEdit } from "react-icons/bi";
import { FiDelete } from "react-icons/fi";
import PostImg from "../../assets/posts.jpg";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src={PostImg} alt="dog" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor!
          <div className="singlePostEdit">
            <BiEdit />
            <FiDelete />
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Dmytro Boiko</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDescription">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non possimus
          laborum quo commodi praesentium laudantium excepturi reprehenderit hic
          quos? Earum odit officia fugiat natus? Quas sapiente quisquam
          excepturi sit similique. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Non possimus laborum quo commodi praesentium
          laudantium excepturi reprehenderit hic quos? Earum odit officia fugiat
          natus? Quas sapiente quisquam excepturi sit similique. Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Non possimus laborum quo
          commodi praesentium laudantium excepturi reprehenderit hic quos? Earum
          odit officia fugiat natus? Quas sapiente quisquam excepturi sit
          similique. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Non possimus laborum quo commodi praesentium laudantium excepturi
          reprehenderit hic quos? Earum odit officia fugiat natus? Quas sapiente
          quisquam excepturi sit similique.
        </p>
      </div>
    </div>
  );
}
