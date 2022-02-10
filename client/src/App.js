import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/topbar/TopBar";
import { Context } from "./context/Context";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import SinglePage from "./pages/singlePage/SinglePage";
import User from "./pages/user/User";
import Write from "./pages/write/Write";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route
          path="/register"
          element={user ? <Home /> : <Register />}
        ></Route>
        <Route path="/login" element={user ? <Home /> : <Login />}></Route>
        <Route path="/write" element={user ? <Write /> : <Login />}></Route>
        <Route path="/user" element={user ? <User /> : <Login />}></Route>
        <Route path="/post/:postId" element={<SinglePage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
