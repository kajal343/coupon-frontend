import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/AdminLogin.css";

const AdminLogin = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://coupon-distribution-joo3.onrender.com/api/admin/login",
        { username: "admin", password }, // ✅ Ensure username is sent
        { withCredentials: true } // ✅ Allow credentials (cookies)
      );

      localStorage.setItem("adminToken", response.data.token); // ✅ Store JWT token
      navigate("/admin/dashboard"); // ✅ Redirect to Admin Panel
    } catch (error) {
      setError(error.response?.data?.message || "Login failed!"); // ✅ Improved error handling
    }
  };

  return (
    <div className="admin-login">
      <h2>Admin Login</h2>
      <input
        type="password"
        placeholder="Enter Admin Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p className="error-message">{error}</p>} {/* ✅ Show error if exists */}
    </div>
  );
};

export default AdminLogin;