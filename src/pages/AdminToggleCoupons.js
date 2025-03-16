import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/AdminPanel.css";

const AdminToggleCoupons = () => {
  const [coupons, setCoupons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCoupons = async () => {
      const response = await axios.get("https://your-backend-url/api/coupons/all");
      setCoupons(response.data);
    };
    fetchCoupons();
  }, []);

  const handleToggle = async (id, available) => {
    await axios.put(`https://coupon-distribution-joo3.onrender.com/api/admin/toggle/${id}`, { available: !available });
    setCoupons(coupons.map(coupon => coupon._id === id ? { ...coupon, available: !available } : coupon));
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
      <button className="back-btn" onClick={() => navigate("/admin/panel")}>⬅ Back</button>
    </div>
  );
};

export default AdminToggleCoupons;
