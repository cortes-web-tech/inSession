import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import ListSessions from "./ListSessions";
import Session from "./Session";
import Session_Info from "./Session_Info";
import User from "./User";
import Users from "./Users";
import { useEffect, useState } from "react";

const NavBar = (props) => {
  const [loggedIn, setLoggedIn] = useState([]);
  const user = "masaomi";
  useEffect(() => {
    setLoggedIn(1);
  });
  // console.log(loggedIn);

  return (
    <BrowserRouter>
      <div className="nav">
        <nav>
          <ul className="leftNav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="ListSessions">Sessions</Link>
            </li>
            <li>
              <Link to="Users">Users</Link>
            </li>
          </ul>
          <ul className="rightNav">
            <li>
              <a href="">Profile</a>
            </li>

            <li>{loggedIn == null ? loggedIn : "hello " + user}</li>
            <li>Logout</li>
          </ul>
        </nav>
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="ListSessions" element={<ListSessions />} />
          <Route path="Index" element={<Home />} />
          <Route path="Session/" element={<Session />} />
          <Route path="Session/:session_id" element={<Session />} />
          <Route path="SessionLink" element={<Session />} />
          <Route path="Session_Info/" element={<Session_Info />} />
          <Route path="User" element={<User />} />
          <Route path="Users" element={<Users />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default NavBar;
