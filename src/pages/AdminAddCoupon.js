import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/AdminPanel.css";

const AdminAddCoupon = () => {
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleAddCoupon = async () => {
    const token = localStorage.getItem("adminToken");
  
    if (!token) {
      setMessage("Unauthorized: Please log in again.");
      navigate("/admin/login");
      return;
    }
  
    try {
      const response = await axios.post(
        "https://coupon-distribution-joo3.onrender.com/api/admin/addcoupons",
        { code },
        {
          headers: { Authorization: `Bearer ${token}` }, // ✅ Send token
        }
      );
  
      setMessage(response.data.message);
      setCode(""); // Reset input after successful addition
    } catch (error) {
      setMessage(error.response?.data?.message || "An error occurred.");
    }
  };
  

  return (
    <div className="admin-panel">
      <h2>➕ Add Coupon</h2>
      <input
        type="text"
        placeholder="Enter Coupon Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button onClick={handleAddCoupon}>Add Coupon</button>
      {message && <p>{message}</p>}
      <button className="back-btn" onClick={() => navigate("/admin/dashboard")}>⬅ Back</button>
    </div>
  );
};

export default AdminAddCoupon;
