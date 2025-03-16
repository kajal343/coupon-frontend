import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/AdminPanel.css";

const AdminToggleCoupons = () => {
  const [coupons, setCoupons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCoupons = async () => {
      const token = localStorage.getItem("adminToken");
  
      if (!token) {
        navigate("/admin/login"); // Redirect to login if token is missing
        return;
      }
  
      try {
        const response = await axios.get(
          "https://coupon-distribution-joo3.onrender.com/api/coupons/all",
          {
            headers: { Authorization: `Bearer ${token}` }, // ✅ Send token
          }
        );
        setCoupons(response.data);
      } catch (error) {
        console.error("Error fetching coupons:", error);
        navigate("/admin/login"); // Redirect if unauthorized
      }
    };
  
    fetchCoupons();
  }, [navigate]);
  
  const handleToggle = async (id, available) => {
    const token = localStorage.getItem("adminToken");
  
    try {
      await axios.put(
        `https://coupon-distribution-joo3.onrender.com/api/admin/toggle/${id}`,
        { available: !available },
        {
          headers: { Authorization: `Bearer ${token}` }, // ✅ Send token
        }
      );
  
      // ✅ Update state to reflect changes
      setCoupons(coupons.map(coupon => 
        coupon._id === id ? { ...coupon, available: !available } : coupon
      ));
    } catch (error) {
      console.error("Error toggling coupon:", error);
    }
  };
  
  return (
    <div className="admin-panel">
      <h2>🔄 Toggle Coupons</h2>
      <ul>
        {coupons.map((coupon) => (
          <li key={coupon._id}>
            {coupon.code} - {coupon.available ? "🟢 Active" : "🔴 Inactive"}
            <button onClick={() => handleToggle(coupon._id, coupon.available)}>
              {coupon.available ? "Deactivate" : "Activate"}
            </button>
          </li>
        ))}
      </ul>
      <button className="back-btn" onClick={() => navigate("/admin/dashboard")}>⬅ Back</button>

    </div>
  );
};

export default AdminToggleCoupons;
