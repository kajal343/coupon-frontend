
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import CouponClaim from "./components/CouponClaim";
import Navbar from "./components/Navbar";
import AdminDashboard from "./pages/AdminDashboard";
import AddCoupon from "./pages/AdminAddCoupon";
import ToggleCoupons from "./pages/AdminToggleCoupons";
import ClaimHistory from "./pages/AdminHistory";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/claim" element={<CouponClaim />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/add-coupon" element={<AddCoupon />} />
        <Route path="/admin/toggle-coupons" element={<ToggleCoupons />} />
        <Route path="/admin/history" element={<ClaimHistory />} />
      </Routes>
    </>
  );
}

export default App;
