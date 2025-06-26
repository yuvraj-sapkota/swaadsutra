import { MdDashboard } from "react-icons/md";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { BsBagHeartFill } from "react-icons/bs";
import { FaUserLarge } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLogOut } from "react-icons/io5";
import HamroMenuLogo from "../../components/HamroMenuLogo";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Logout from "../../components/Logout";

const Sidebar = ({ setActivePage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState("menu");
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const handleLogout = () => {
    setShowLogoutPopup(!showLogoutPopup);
  };

  return (
    <>
      <header>
        <div className="shadow-md p-4 bg-white  fixed z-10 w-full">
          <div className="flex items-start justify-between  ">
            <HamroMenuLogo />
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <IoClose size={26} /> : <GiHamburgerMenu size={26} />}
            </button>
          </div>
        </div>

        {/* large screen sidebar  */}
        <div className="fixed z-10 top-[78px] hidden md:block w-[25%]">
          <div className=" left-0 bg-[#f5f5dc] h-screen overflow-y-auto hide-scrollbar  p-1">
            <div className="flex flex-col items-center  justify-center gap-4 p-4 ">
              <button
                onClick={() => {
                  setIsActive("menu");
                  setActivePage("menu");
                }}
                className={`flex items-center ${
                  isActive == "menu"
                    ? "bg-[#2e8b57] text-white"
                    : "text-gray-500"
                } w-full gap-4 px-2 py-2 rounded`}
              >
                <GiForkKnifeSpoon size={24} />
                <p className="font-poppins font-normal text-lg">
                  Manage Menu Items
                </p>
              </button>

              <button
                onClick={() => {
                  setIsActive("profile-setting");
                  setActivePage("profile-setting");
                }}
                className={`flex items-center ${
                  isActive == "profile-setting"
                    ? "bg-[#2e8b57] text-white"
                    : "text-gray-500"
                } w-full gap-4 px-2 py-2 rounded`}
              >
                <FaUserLarge size={24} className="" />
                <p className="font-poppins font-medium  text-lg">
                  Profile Setting
                </p>
              </button>
              <button
                onClick={handleLogout}
                className={`flex items-center ${
                  isActive == "logout"
                    ? "bg-[#2e8b57] text-white"
                    : "text-gray-500"
                } w-full gap-4 px-2 py-2 rounded`}
              >
                <IoLogOut size={24} className="" />
                <p className="font-poppins font-medium  text-lg">Logout</p>
              </button>
            </div>
          </div>
        </div>

        {/* dashboard sidebar for mobile view  */}
        {isOpen && (
          <div className="md:hidden z-10 fixed top-[60px] left-0  duration-200 transition bg-[#f5f5dc] h-screen overflow-y-auto hide-scrollbar w-[80%] p-1">
            <div className="flex flex-col items-center  justify-center gap-4 p-4 ">
              <button
                onClick={() => {
                  setIsActive("menu");
                  setActivePage("menu");
                  setIsOpen(!isOpen);
                }}
                className={`flex items-center ${
                  isActive == "menu"
                    ? "bg-[#2e8b57] text-white"
                    : "text-gray-500"
                } w-full gap-4 px-2 py-2 rounded`}
              >
                <GiForkKnifeSpoon size={24} />
                <p className="font-poppins font-normal text-lg">
                  Manage Menu Items
                </p>
              </button>

              <button
                onClick={() => {
                  setIsActive("profile-setting"),
                    setActivePage("profile-setting");
                    setIsOpen(!isOpen);
                }}
                className={`flex items-center ${
                  isActive == "profile-setting"
                    ? "bg-[#2e8b57] text-white"
                    : "text-gray-500"
                } w-full gap-4 px-2 py-2 rounded`}
              >
                <FaUserLarge size={24} className="" />
                <p className="font-poppins font-medium  text-lg">
                  Profile Setting
                </p>
              </button>
              <button
                onClick={handleLogout}
                className={`flex items-center ${
                  isActive == "logout"
                    ? "bg-[#2e8b57] text-white"
                    : "text-gray-500"
                } w-full gap-4 px-2 py-2 rounded`}
              >
                <IoLogOut size={24} className="" />
                <p className="font-poppins font-medium  text-lg">Logout</p>
              </button>
            </div>
          </div>
        )}

        {showLogoutPopup && (
          <Logout
            onConfirm={() => {
              localStorage.clear();
              setIsActive("logout");
              navigate("/login");
            }}
            onCancel={() => setShowLogoutPopup(false)}
          />
        )}
      </header>
    </>
  );
};

export default Sidebar;
