import axios from "axios";
import React, { useState } from "react";
import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault(); // submit without refreshing page
    try {
      setError(false);
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your username..."
          onChange={(event) => setUsername(event.target.value)}
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="email"
          placeholder="Enter your email..."
          onChange={(event) => setEmail(event.target.value)}
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password..."
          onChange={(event) => setPassword(event.target.value)}
        />
        <button className="registerButton" type="submit">
          Register
        </button>
        {error && (
          <span
            style={{ color: "red", textAlign: "center", marginTop: "10px" }}
          >
            Something went wrong!
          </span>
        )}
      </form>
    </div>
  );
}
