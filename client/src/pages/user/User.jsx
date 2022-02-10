import React, { useContext, useState } from "react";
import "./user.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { BiUserCircle } from "react-icons/bi";
import { Context } from "../../context/Context";
import axios from "axios";
import defaultUser from "../../assets/defaultUser.png";

export default function User() {
  const { user, dispatch } = useContext(Context);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch({ type: "UPDATE_LAUNCH" });
    const changedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      changedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const res = await axios.put("/users/" + user._id, changedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payLoad: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAIL" });
    }
  };

  console.log(user._id);

  const handleDelete = async () => {
    try {
      await axios.delete(`/users/${user._id}`, {
        data: { userId: user._id },
      });
      dispatch({ type: "LOGOUT" });
      window.location.replace("/login");
    } catch (err) {}
  };

  const publicFolder = "http://localhost:3001/pictures/";

  return (
    <div className="user">
      <div className="userWrapper">
        <div className="userTitle">
          <span className="userUpdateTitle">Update Account</span>
          <span className="userDeleteTitle" onClick={handleDelete}>
            Delete Account
          </span>
        </div>
        <form className="userForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="userProfilePicture">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : user.profilePic === ""
                  ? defaultUser
                  : publicFolder + user.profilePic
              }
              alt="react"
            />
            <label htmlFor="fileInput">
              <BiUserCircle />
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(event) => setFile(event.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button className="userSubmit" type="submit">
            Update
          </button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "10px" }}
            >
              Profile updated!
            </span>
          )}
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
