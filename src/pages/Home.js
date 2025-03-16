import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Coupon Distribution System</h1>
      <p>Claim your exclusive coupons now!</p>
      <Link to="/claim" className="claim-btn">Claim Coupon</Link>
    </div>
  );
};

export default HomePage;
