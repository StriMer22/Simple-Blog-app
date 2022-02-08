import React from "react";
import "./user.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { BiUserCircle } from "react-icons/bi";
import AboutMe from "../../assets/about-me.png";

export default function User() {
  return (
    <div className="user">
      <div className="userWrapper">
        <div className="userTitle">
          <span className="userUpdateTitle">Update Account</span>
          <span className="userDeleteTitle">Delete Account</span>
        </div>
        <form className="userForm">
          <label>Profile Picture</label>
          <div className="userProfilePicture">
            <img src={AboutMe} alt="react" />
            <label htmlFor="fileInput">
              <BiUserCircle />
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Dmytro" />
          <label>Email</label>
          <input type="email" placeholder="Dmytro@mail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="userSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}