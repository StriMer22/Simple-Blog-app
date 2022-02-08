import React from "react";
import "./post.css";
import PostImg from "../../assets/posts.jpg";

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src={PostImg} alt="dog"></img>
      <div className="postInfo">
        <div className="postCategories">
          <span className="postCategory">Test1</span>
          <span className="postCategory">Test2</span>
        </div>
        <span className="postTitle">Lorem ipsum?</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDescription">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vel quidem
        blanditiis ipsam repellendus commodi reprehenderit. Repellendus laborum
        molestias reprehenderit aut, sed, dicta consectetur blanditiis ipsa,
        omnis ea ducimus culpa.
      </p>
    </div>
  );
}
