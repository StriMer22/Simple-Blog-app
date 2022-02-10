import React, { useEffect, useState, useContext } from "react";
import "./singlePost.css";
import { BiEdit } from "react-icons/bi";
import { FiDelete } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2]; //id of single post
  const [post, setPost] = useState([]);
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDescription(res.data.description);
    };
    fetchPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        description,
      });
      window.location.reload("/");
    } catch (err) {}
  };

  const publicFolder = "http://localhost:3001/pictures/";

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img
            className="singlePostImg"
            src={publicFolder + post.photo}
            alt="Post"
          />
        )}
        {update ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleIn"
            autoFocus={true}
            onChange={(event) => setTitle(event.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {post.title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <BiEdit onClick={() => setUpdate(true)} />
                <FiDelete onClick={handleDelete} />
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link className="link" to={`/?user=${post.username}`}>
              <b> {post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {update ? (
          <textarea
            className="singlePostDescriptionIn"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        ) : (
          <p className="singlePostDescription">{post.description}</p>
        )}
      </div>
      {update && (
        <div className="singPostBtnArea">
          <button className="singPostBtn" onClick={handleUpdate}>
            Update
          </button>
        </div>
      )}
    </div>
  );
}
