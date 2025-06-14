import React from "react";
import { Link, useLocation } from "react-router-dom";
// import "../styles/navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <h1 className="logo">🧠 MindVerse</h1>
      <ul className="nav-links">
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === "/memory" ? "active" : ""}>
          <Link to="/memory">Memory Game</Link>
        </li>
        <li className={location.pathname === "/profile" ? "active" : ""}>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
