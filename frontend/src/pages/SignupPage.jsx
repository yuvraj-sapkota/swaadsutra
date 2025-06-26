import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import HamroMenuLogo from "../components/HamroMenuLogo";
import { toast } from "react-toastify";
const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    userName: "",
    password: "",
    confirmPassword: "",
    restaurantName: "",
    restaurantDescription: "",
    restaurantAddress: "",
    openingHours: "",
    restaurantCoverPhoto: "",
    restaurantProfilePhoto: "",
  });

  const handleChange = (e) => {
    const data = e.target;
    setUserData((prev) => ({ ...prev, [data.name]: data.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await res.json();
      
      if (res.ok) {
        toast.success(data.message);
         
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log("Error during signup", error);
    }
    console.log("The user data is", userData);
  };

  return (
    <>
      <div className="flex items-center justify-center  min-h-screen bg-[#f5f5dc] ">
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-xl w-full p-6 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-center justify-center">
              <HamroMenuLogo />
            </div>

            {/* username  */}
            <div className="relative">
              <FaUser className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />
              <input
                type="text"
                name="userName"
                value={userData.userName}
                onChange={handleChange}
                placeholder="Username"
                className="w-full pl-10  pr-4 py-2 border rounded outline-none "
              />
            </div>

            {/* password  */}
            <div className="relative">
              <FaLock className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={userData.password}
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

            {/* confirm password  */}
            <div className="relative">
              <FaLock className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                value={userData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
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

            {/* Restaurant Name  */}
            <div className="relative">
              <FaUser className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />
              <input
                type="text"
                name="restaurantName"
                value={userData.restaurantName}
                onChange={handleChange}
                placeholder="Restaurant Name"
                className="w-full pl-10  pr-4 py-2 border rounded outline-none "
              />
            </div>
            {/* Restaurant Description  */}
            <div className="relative">
              <FaUser className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />
              <input
                type="text"
                name="restaurantDescription"
                value={userData.restaurantDescription}
                onChange={handleChange}
                placeholder="Restaurant Description"
                className="w-full pl-10  pr-4 py-2 border rounded outline-none "
              />
            </div>

            {/* Restaurant Address  */}
            <div className="relative">
              <FaUser className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />
              <input
                type="text"
                name="restaurantAddress"
                value={userData.restaurantAddress}
                onChange={handleChange}
                placeholder="Restaurant Address"
                className="w-full pl-10  pr-4 py-2 border rounded outline-none "
              />
            </div>

            {/* Restaurant Opening hours  */}
            <div className="relative">
              <FaUser className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />
              <input
                type="text"
                name="openingHours"
                value={userData.openingHours}
                onChange={handleChange}
                placeholder="opening Hours"
                className="w-full pl-10  pr-4 py-2 border rounded outline-none "
              />
            </div>
            {/* Restaurant cover/banner photo  */}
            <div className="relative">
              <FaUser className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />
              <p>Restaurant cover photo</p>
              <input
                type="text"
                name="restaurantCoverPhoto"
                value={userData.restaurantCoverPhoto}
                onChange={handleChange}
                placeholder="Restaurant cover photo"
                className="w-full pl-10  pr-4 py-2 border rounded outline-none "
              />
            </div>
            {/* Restaurant profile photo  */}
            <div className="relative">
              <FaUser className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />
              <p>Restaurant profile photo</p>
              <input
                type="text"
                name="restaurantProfilePhoto"
                value={userData.restaurantProfilePhoto}
                onChange={handleChange}
                placeholder="Restaurant profile photo"
                className="w-full pl-10  pr-4 py-2 border rounded outline-none "
              />
            </div>

            <Button type="submit">Signup</Button>
          </form>

          <p className="font-poppins font-normal text-sm text-center">
            Don't have an account?
            <span className="text-[#238b57]">
              <Link to="/login"> Login</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
