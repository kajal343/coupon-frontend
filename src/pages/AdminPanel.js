import { useNavigate } from "react-router-dom";
import "../styles/AdminPanel.css";

function AdminPanel() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");  // Remove login token
    navigate("/admin/login");  // Redirect to login page
  };

  return (
    <div className="admin-panel">
      <h2>Admin Dashboard</h2>
      <p>Welcome, Admin!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default AdminPanel;
