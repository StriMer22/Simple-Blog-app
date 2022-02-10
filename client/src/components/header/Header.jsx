import React from "react";
import "./header.css";
import HomeHeader from "../../assets/home_top.jfif";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSmall"> Simple version </span>
        <span className="headerTitleLarge"> Blog </span>
      </div>
      <img className="headerImg" src={HomeHeader} alt="blog" />
    </div>
  );
}
