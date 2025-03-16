import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AdminDashboard.css";

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("adminToken") !== "loggedin") {
      navigate("/admin/login"); // ✅ Redirect to login if not authenticated
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
