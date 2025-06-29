import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import Button from "../components/Button";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import HamroMenuLogo from "../components/HamroMenuLogo";
const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://swaadsutra.onrender.com/api/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
        }
      );

      const data = await res.json();

      console.log(data);
      if (res.ok && data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("details", data.user._id);

        navigate("/dashboard", {
          state: { message: "Login successful" },
        });
      } else {
        toast.error(data.message || "Invalid username or passwordsss");
      }
    } catch (error) {
      console.log("Error during Login", error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center  min-h-screen bg-[#f5f5dc] ">
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-xl w-full p-6 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-center justify-center">
              <HamroMenuLogo />
            </div>
            <div className="relative">
              <FaUser className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />
              <input
                type="text"
                name="userName"
                value={loginData.userName}
                onChange={handleChange}
                placeholder="Username"
                className="w-full pl-10  pr-4 py-2 border rounded outline-none "
              />
            </div>
            <div className="relative">
              <FaLock className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={loginData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full pl-10  pr-10 py-2 border rounded outline-none "
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-3  transform -translate-y-1/2 text-gray-500 "
              >
                {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
              </button>
            </div>

            <Button type="submit">Login</Button>
          </form>

          <p className="font-poppins font-normal text-sm text-center">
            Don't have an account?
            <span className="text-[#238b57]">
              <Link to="/register"> Register</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
