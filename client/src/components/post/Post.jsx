import React from "react";
import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ post }) {
  const publicFolder = "http://localhost:3001/pictures/";
  return (
    <div className="post">
      {post.photo && (
        <img className="postImg" src={publicFolder + post.photo} alt="dog" />
      )}
      <div className="postInfo">
        <div className="postCategories">
          {post.category.map((c) => {
            return <span className="postCategory">{c.name}</span>;
          })}
        </div>
        <Link className="link" to={`/post/${post._id}`}>
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDescription">{post.description}</p>
    </div>
  );
}
