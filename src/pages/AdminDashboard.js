import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AdminDashboard.css";

const AdminDashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {  // ✅ Redirect if there's no token
      navigate("/admin/login");
    }
  }, [navigate]);
  
  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <button onClick={() => navigate("/admin/add-coupon")}>➕ Add Coupon</button>
      <button onClick={() => navigate("/admin/toggle-coupons")}>🔄 Toggle Coupons</button>
      <button onClick={() => navigate("/admin/history")}>📜 View Claim History</button>
      <button
        onClick={() => {
          localStorage.removeItem("adminToken");
          navigate("/admin/login");
        }}
      >
        🚪 Logout
      </button>
    </div>
  );
};

export default AdminDashboard;
