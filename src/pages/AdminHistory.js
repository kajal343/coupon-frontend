import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/AdminPanel.css";

const AdminHistory = () => {
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHistory = async () => {
      const response = await axios.get("https://coupon-distribution-joo3.onrender.com/api/admin/history");
      setHistory(response.data);
    };
    fetchHistory();
  }, []);

  return (
    <div className="admin-panel">
      <h2>📜 Claim History</h2>
      <ul>
        {history.map((entry, index) => (
          <li key={index}>
            {entry.code} claimed by IP: {entry.claimedBy.ip} at {new Date(entry.claimedAt).toLocaleString()}
          </li>
        ))}
      </ul>
      <button className="back-btn" onClick={() => navigate("/admin/panel")}>⬅ Back</button>
    </div>
  );
};

export default AdminHistory;
