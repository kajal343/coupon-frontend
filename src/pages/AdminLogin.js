
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
      const response = await axios.post("https://coupon-distribution-joo3.onrender.com/api/admin/login", { password }, { withCredentials: true });
      
      if (response.data.success) {
        localStorage.setItem("adminToken", response.data.token); // ✅ Store admin token
        navigate("/admin/dashboard"); // ✅ Redirect to Admin Dashboard
      } else {
        setError("Incorrect password!");
      }
    } catch (error) {
      setError(error.response?.data?.message || "Login failed!");
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
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default AdminLogin;
