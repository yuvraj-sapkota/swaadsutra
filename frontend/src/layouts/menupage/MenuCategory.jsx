const MenuCategory = ({ categories, categoryActive, setCategoryActive }) => {
  return (
    <>
      <div className="bg-[#f5f5dc]  overflow-x-auto hide-scrollbar py-4 md:max-w-[20%] md:min-w-[20%]">
        <div className="flex md:flex-col  flex-nowrap whitespace-nowrap gap-3   py-1 ">
          {categories.map((curElem, index) => (
            <p
              key={index}
              onClick={() => setCategoryActive(curElem.category)}
              className={` ${
                categoryActive === curElem.category
                  ? "bg-[#2e8b57] text-white"
                  : ""
              }
              px-2 md:px-4 py-1 rounded uppercase text-gray-700 font-poppins font-medium text-sm `}
            >
              {curElem.category}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default MenuCategory;
