import React, { useEffect, useState, useContext } from "react";
import "./sidebar.css";
import defaultUser from "../../assets/defaultUser.png";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

export default function Sidebar() {
  const { user } = useContext(Context);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      const res = await axios("/categories");
      setCategory(res.data);
    };
    getCategories();
  }, []);

  const publicFolder = "http://localhost:3001/pictures/";

  return (
    <>
      {!user ? (
        <br />
      ) : (
        <div className="sidebar">
          <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img
              src={
                user.profilePic === ""
                  ? defaultUser
                  : publicFolder + user.profilePic
              }
              alt="admin"
              style={{ height: "200px", width: "200px" }}
            ></img>
            <p style={{ marginTop: "20px" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat,
              dicta? Nihil quod vel modi, tempora laborum, itaque, laudantium
              corrupti error aspernatur excepturi doloremque accusantium
              perspiciatis. Natus velit harum aliquid consequatur!
            </p>
          </div>
          <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
              {category.map((c) => {
                return (
                  <Link className="link" to={`/category=${c.name}`}>
                    <li className="sidebarListItem">{c.name}</li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
