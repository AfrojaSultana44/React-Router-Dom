import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h2 className="mb-3">My Website:</h2>
      <nav className="space-x-3">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-white font-bold px-3 py-2 rounded bg-blue-500" : ""
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-white font-bold px-3 py-2 rounded bg-blue-500" : ""
          }
          to="/users"
        >
          Users
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-white font-bold px-3 py-2 rounded bg-blue-500" : ""
          }
          to="/posts"
        >
          Posts
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-white font-bold px-3 py-2 rounded bg-blue-500" : ""
          }
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-white font-bold px-3 py-2 rounded bg-blue-500" : ""
          }
          to="/contact"
        >
          Contact Us
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
