import HamroMenuLogo from "./components/HamroMenuLogo";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import MenuPage from "./pages/MenuPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import Dashboard from "./pages/DashboardPage";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer position="top-right" autoClose={2000} />
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<Navbar />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignupPage />} />
        </Route>

        <Route path="/menupage/:restaurantId" element={<MenuPage />} />

        {/* protected route  */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
