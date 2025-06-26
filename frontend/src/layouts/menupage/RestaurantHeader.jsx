import { IoLocationOutline } from "react-icons/io5";
import DigitalMenu from "../../components/HamroMenuLogo";
// import { useEffect, useState } from "react";
// import { useState } from "react";
const RestaurantHeader = () => {
  // const [userProfile, setUserProfile] = useState();

  // const token = localStorage.getItem("token");

  // const fetchUserProfile = async () => {
  //   try {
  //     const res = await fetch("http://localhost:8000/api/getUserDetails", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     const data = await res.json();
  //     setUserProfile(data);
  //   } catch (error) {
  //     console.log("Error while getting user detials", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchUserProfile();
  // }, []);

  return (
    <>
      {/* restaurant's cover image  */}

      <div className="w-full h-auto lg:h-[250px]">
        <img
          src="https://www.shutterstock.com/image-photo/top-view-fully-set-rustic-260nw-772641289.jpg"
          alt="Image not available"
          className="w-[100%] h-[100%] object-cover object-center"
        />
      </div>

      <div className="px-4 max-w-[1300px] mx-auto">
        {/* restaurant profile photo, Name and Location  */}
        <div className="flex items-center justify-start gap-4 ">
          <div className="w-[80px] h-[80px] ">
            <img
              src="https://merokinmel.com/storage/category/icon/60f1526ed2563.png"
              alt=""
              className="w-[100%] h-[100%] object-cover object-center"
            />
          </div>
          <div className="">
            <h1 className=" text-shadow-md font-poppins font-bold text-lg leading-normal tracking-normal text-black ">
              KFC Chitwan
            </h1>
            <div className="flex items-center justify-start gap-2">
              <IoLocationOutline size={28} />
              <h3 className="text-[10px] font-poppins font-normal leading-3 tracking-normal text-black ">
                Chaubiskothi - 10, Bharatpur, Chitwan, Bagmati
              </h3>
            </div>
          </div>
        </div>

        <div className="flex  items-center gap-4">
          {/* rating and review  */}
          {/* <div className="border-r border-gray-500 pr-4">
            <p className="bg-[#F5F5DC]    font-poppins font-medium text-[10px] text-black py-1">
              <span className="bg-[#2E8B57] px-2 py-1 rounded-l-lg text-white  font-normal">
                4.2
              </span>{" "}
              Rating
            </p>
            <p className="font-poppins font-normal text-[8px] text-gray-900  text-center">
              (297 review )
            </p>
          </div> */}
          {/* opening hour  */}
          <div>
            <p className="bg-[#F5F5DC] font-poppins font-normal text-[10px] py-2 px-4 rounded-full">
              <span className="text-[#2E8B57]">Opening Hours: </span>9:00 AM -
              10:00 PM
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantHeader;

// {userProfile?.user && (
//         <div className="px-4 max-w-[1300px] mx-auto">
//           {/* restaurant profile photo, Name and Location */}
//           <div className="flex items-center justify-start gap-4">
//             <div className="w-[80px] h-[80px]">
//               <img
//                 src={userProfile.user.logo}
//                 alt="Restaurant Logo"
//                 className="w-full h-full object-cover object-center border "
//               />
//             </div>
//             <div>
//               <h1 className="text-shadow-md font-poppins font-bold text-lg leading-normal tracking-normal text-black">
//                 {userProfile.user.restaurantName}
//               </h1>
//               <div className="flex items-center justify-start gap-2">
//                 <IoLocationOutline size={28} />
//                 <h3 className="text-[10px] font-poppins font-normal leading-3 tracking-normal text-black">
//                   {userProfile.user.restaurantAddress}
//                 </h3>
//               </div>
//             </div>
//           </div>

//           {/* Opening Hours */}
//           <div className="flex items-center gap-4 mt-4">
//             <div>
//               <p className="bg-[#F5F5DC] font-poppins font-normal text-[10px] py-2 px-4 rounded-full">
//                 <span className="text-[#2E8B57]">Opening Hours: </span>
//                 {userProfile.user.openingHours}
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
