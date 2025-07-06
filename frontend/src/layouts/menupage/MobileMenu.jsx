const MobileMenu = ({ menuDatas }) => {
  return (
    <>
      <div className="md:hidden   max-w-[1300px]  mx-auto md:px-4 mt-2">
        {menuDatas?.map((menuData, index) => (
          <div
            key={index}
            className="flex items-center justify-between  px-2  py-1 shadow rounded-lg mt-6"
          >
            <div className="flex items-start flex-col gap-4">
              <h1 className="font-poppins font-semibold text-lg text-gray-900 tracking-normal ">
                {menuData.productName}
              </h1>
              <p className="font-poppins font-medium text-sm text-[#2e8b57]">
                {menuData.productPrice}
              </p>
            </div>
            <div className="w-[80px] h-[80px] overflow-hidden rounded-full">
              <img
                src="https://home-cooks.co.uk/cdn/shop/files/chicken-biryani-by-azam-homecooks-238971.jpg?v=1736424721"
                alt="Image not available"
                className="w-[100%] h-[100%] object-cover object-center"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MobileMenu;
