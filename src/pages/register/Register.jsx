import React from "react";
import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Email</label>
        <input
          className="registerInput"
          type="email"
          placeholder="Enter your email..."
        />
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your username..."
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password..."
        />
        <label>Confirm Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password..."
        />
        <button className="registerButton">Register</button>
      </form>
    </div>
  );
}
