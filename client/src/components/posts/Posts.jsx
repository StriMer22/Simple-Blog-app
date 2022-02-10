import React from "react";
import "./posts.css";
import Post from "../post/Post";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((p, keys) => {
        return <Post key={keys} post={p} />;
      })}
    </div>
  );
}
