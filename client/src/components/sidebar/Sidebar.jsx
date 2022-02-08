import React from "react";
import "./sidebar.css";
import AboutMe from "../../assets/about-me.png";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src={AboutMe} alt="react icon"></img>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat,
          dicta? Nihil quod vel modi, tempora laborum, itaque, laudantium
          corrupti error aspernatur excepturi doloremque accusantium
          perspiciatis. Natus velit harum aliquid consequatur!
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Test1</li>
          <li className="sidebarListItem">Test2</li>
          <li className="sidebarListItem">Test3</li>
          <li className="sidebarListItem">Test4</li>
          <li className="sidebarListItem">Test5</li>
          <li className="sidebarListItem">Test6</li>
        </ul>
      </div>
    </div>
  );
}
