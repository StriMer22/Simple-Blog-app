import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./topBar.css";
import { Context } from "../../context/Context";
import defaultUser from "../../assets/defaultUser.png";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const publicFolder = "http://localhost:3001/pictures/";

  return (
    <div className="top">
      <div className="topLeft">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
        </ul>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <a
              className="link"
              href="https://github.com/StriMer22/Simple-Blog-app"
              target="_blank"
              rel="noreferrer"
            >
              ABOUT
            </a>
          </li>
          <li className="topListItem">
            <a
              className="link"
              href="https://www.linkedin.com/in/dmytro-boiko-90b3511b4/"
              target="_blank"
              rel="noreferrer"
            >
              CONTACT
            </a>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/user" className="link">
            <img
              className="topImg"
              src={
                user.profilePic === ""
                  ? defaultUser
                  : publicFolder + user.profilePic
              }
              alt="Profile"
            ></img>
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
