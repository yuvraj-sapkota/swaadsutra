const MenuForLaptop = ({ menuDatas }) => {
  return (
    <>
      <div className="md:flex hidden  items-center  flex-wrap justify-around gap-6 md:max-w-[70%]">
        {menuDatas?.map((menuData, index) => (
          <div
            key={index}
            className=" p-4  shadow-2xl transition-transform duration-200 hover:scale-105 rounded-2xl"
          >
            <div key={index} className="flex  flex-col items-start w-fit  ">
              <div className="lg:w-[200px] lg:h-[200px] overflow-hidden">
                <img
                  className="w-[100%] h-[100%] object-cover object-center "
                  src="https://home-cooks.co.uk/cdn/shop/files/chicken-biryani-by-azam-homecooks-238971.jpg?v=1736424721"
                  alt=""
                />
              </div>
              <div className="py-2">
                <h1 className="font-poppins font-semibold text-lg text-gray-900 tracking-normal">
                  {menuData.productName}
                </h1>
                <p className="font-poppins font-medium text-sm text-[#2ebb57]">{menuData.productPrice}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MenuForLaptop;

// const MenuForLaptop = ({ menuDatas }) => {
//   return (
//     <>
//       <div className="md:flex hidden  items-center  flex-wrap justify-start gap-6 md:max-w-[70%]">
//         <div className=" p-4 shadow-2xl transition-transform duration-200 hover:scale-105 rounded-2xl  flex gap-2">
//           {menuDatas.map((curElem, index) => (
//             <div key={index} className="flex flex-col items-start w-fit  ">
//               <div className="w-[200px] h-[200px] overflow-hidden">
//                 <img
//                   className="w-[100%] h-[100%] object-cover object-center "
//                   src="https://home-cooks.co.uk/cdn/shop/files/chicken-biryani-by-azam-homecooks-238971.jpg?v=1736424721"
//                   alt=""
//                 />
//               </div>
//               <div className="py-2">
//                 <h1 className="font-poppins font-semibold text-lg text-gray-900 tracking-normal">
//                   {curElem.productName}
//                 </h1>
//                 <p className="font-poppins font-medium text-sm text-[#2ebb57]">
//                   Rs. {curElem.productPrice}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default MenuForLaptop;
