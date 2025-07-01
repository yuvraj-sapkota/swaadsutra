import { useEffect, useState } from "react";
import ManageMenuItem from "../layouts/dashboardpage/ManageMenuItem";
import Sidebar from "../layouts/dashboardpage/Sidebar";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import ProfileSetting from "../layouts/dashboardpage/ProfileSetting";

export default function Dashboard() {
  const [activePage, setActivePage] = useState("menu");

  console.log(activePage);
  const renderPage = () => {
    switch (activePage) {
      case "menu":
        return <ManageMenuItem />;
      case "profile-setting":
        return <ProfileSetting />;
      default:
        return "";
    }
  };

  const location = useLocation();

  useEffect(() => {
    if (location.state?.message) {
      toast.success(location.state.message);

      window.history.replaceState({}, document.title);
    }
  }, [location.state]);
  return (
    <div className="p-1 bg-white">
      <div className="">
        <Sidebar setActivePage={setActivePage} />
      </div>
      <div className="md:w-[75%] w-full md:right-0 absolute top-[70px] p-4">
        {renderPage()}
      </div>
      {/*
      <ManageMenuItem /> */}
    </div>
  );
}
