import React, { useState } from "react";
import axios from "axios";
import "../styles/CouponClaim.css";

const CouponClaim = () => {
  const [message, setMessage] = useState("");
  const [coupon, setCoupon] = useState("");

  const handleClaim = async () => {
    try {
      const response = await axios.post("https://coupon-distribution-joo3.onrender.com/api/coupons/claim", {}, { withCredentials: true });
      setCoupon(response.data.coupon);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <div className="claim-container">
      <h2>Claim Your Coupon</h2>
      <button onClick={handleClaim} className="claim-btn">Claim Now</button>
      {message && <p>{message}</p>}
      {coupon && <p>Your Coupon Code: <strong>{coupon}</strong></p>}
    </div>
  );
};

export default CouponClaim;
