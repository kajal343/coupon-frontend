import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Coupon Distributor</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/claim">Claim Coupon</Link>
        <Link to="/admin">Admin Panel</Link>
      </div>
    </nav>
  );
};

export default Navbar;
