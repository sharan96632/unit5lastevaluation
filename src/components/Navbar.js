import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="nav-home" to="/">
        Home
      </Link>
      <Link className="nav-logout" to="/logout">
        Logout
      </Link>

      <Link className="nav-login" to="/login">
        Login
      </Link>
    </div>
  );
};
