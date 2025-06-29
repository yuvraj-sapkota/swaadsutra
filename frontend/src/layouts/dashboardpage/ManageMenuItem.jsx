import { useEffect, useState } from "react";
import Button from "../../components/Button";
import { TbXboxXFilled } from "react-icons/tb";
import { MdDelete } from "react-icons/md";

import { FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const ManageMenuItem = () => {
  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const [showProductForm, setShowProductForm] = useState(false);
  const [availableCategory, setAvailableCategory] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [menuDatas, setMenuDatas] = useState([]);
  const [categories, setCategories] = useState("");

  const [products, setProducts] = useState({
    productName: "",
    productPrice: "",
    category: "",
    productImage: "",
  });
  const token = localStorage.getItem("token");

  const handleProductChange = (e) => {
    setProducts((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // getting all category
  const getAllCategories = async () => {
    try {
      const res = await fetch(
        "https://swaadsutra.onrender.com/api/category/getCategory",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      setAvailableCategory(data.allCategory);
      if (data.allCategory.length > 0) {
        setActiveCategory(data.allCategory[0].category);
      } else {
        alert("Categories not available");
      }
    } catch (error) {
      console.log("Error while fetching categories", error);
    }
  };

  // handling category submitting
  const handleAddCategorySubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://swaadsutra.onrender.com/api/category/createCategory",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ category: categories }),
        }
      );
      const data = await res.json();
      if (res.ok) {
        toast.success(data.message);
        setCategories("");
      } else {
        toast.error(data.message || "Failed to add product");
      }
    } catch (error) {
      console.log("Error while adding new category", error);
    }

    getAllCategories();
  };

  // handling product submiting
  const handleAddProductSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(
        "https://swaadsutra.onrender.com/api/menu/createMenu",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(products),
        }
      );

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message);
        setProducts({
          productName: "",
          productPrice: "",
          category: "",
          productImage: "",
        });
      } else {
        toast.error(data.message || "Failed to add product");
      }
    } catch (error) {
      console.log("Error while creating the new menu", error);
      toast.error("Something went wrong");
    }
  };

  //  fetching the menu item
  const getAllMenu = async () => {
    try {
      const res = await fetch(
        "https://swaadsutra.onrender.com/api/menu/getMenu",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      console.log(data);
      setMenuDatas(data.items);
    } catch (error) {
      console.log("Error while fetching menu items from the backend", error);
    }
  };

  const filteredMenu = menuDatas.filter(
    (item) => item.category === activeCategory
  );

  // for deleting the item
  const deleteMenuItem = async (id) => {
    console.log("Delete icon is clicked ");
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(
        `https://swaadsutra.onrender.com/api/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log("Failed to delete item", error);
    }
  };

  useEffect(() => {
    getAllCategories();
    getAllMenu();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <Button
            type="button"
            onClick={() => setShowCategoryForm(!showCategoryForm)}
          >
            Add category
          </Button>
          <Button
            type="button"
            onClick={() => setShowProductForm(!showProductForm)}
          >
            Add Product
          </Button>
        </div>

        <div className=" p-4">
          <h1 className="font-poppins font-medium text-2xl">
            Item you have added
          </h1>

          <div className="flex gap-4 overflow-x-auto whitespace-nowrap mt-6  hide-scrollbar bg-[#f5f5dc] rounded py-4 px-1">
            {availableCategory.map((curElem, i) => (
              <button
                className={`${
                  activeCategory === curElem.category
                    ? "bg-[#2e8b57] text-white"
                    : ""
                } px-4 py-1 rounded font-poppins text-lg`}
                key={i}
                onClick={() => setActiveCategory(curElem.category)}
              >
                {curElem.category}
              </button>
            ))}
          </div>

          <div className=" max-w-[1300px]  mx-auto px-4 ">
            {filteredMenu?.map((menuData, index) => (
              <div
                key={index}
                className="flex items-start justify-between  px-2 py-1 shadow rounded-lg mt-6"
              >
                <div className="flex items-start flex-col gap-4">
                  <h1 className="font-poppins font-semibold text-lg text-gray-900 tracking-normal ">
                    {menuData.productName}
                  </h1>

                  <p className="font-poppins font-medium text-lg text-[#2e8b57]">
                    RS. {menuData.productPrice}
                  </p>
                  <div className=" space-x-3">
                    <button>
                      <FaEdit
                        className="text-gray-400 hover:text-gray-900"
                        size={20}
                      />{" "}
                    </button>
                    <button
                      className="ml-4"
                      onClick={() => deleteMenuItem(menuData._id)}
                    >
                      <MdDelete
                        className="text-gray-500 hover:text-red-600"
                        size={20}
                      />{" "}
                    </button>
                  </div>
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
        </div>
      </div>

      {/* Show category form  */}
      {showCategoryForm && (
        <div className=" w-full h-screen absolute top-0 z-20 backdrop-blur-2xl">
          <div className="flex items-center justify-center h-screen p-4 ">
            <form
              onSubmit={handleAddCategorySubmit}
              action=""
              className="shadow-[0_0_20px_rgba(0,0,0,0.25)] px-4 py-12 "
            >
              <div className="flex items-center justify-between mb-10">
                <h1 className="font-poppins font-bold text-xl text-gray-500 text-center">
                  Enter Category
                </h1>
                <button
                  type="button"
                  onClick={() => setShowCategoryForm(!showCategoryForm)}
                >
                  <TbXboxXFilled size={32} className="text-red-500" />
                </button>
              </div>
              <input
                type="text"
                name="categories"
                value={categories}
                onChange={(e) => setCategories(e.target.value)}
                placeholder="Enter Category"
                className=" rounded font-poppins font-normal text-sm px-2 py-2 w-full mb-6 outline-none  border"
              />
              <Button type="submit">Add </Button>
            </form>
          </div>
        </div>
      )}

      {/* show Add product form  */}
      {showProductForm && (
        <div className=" w-full h-screen absolute top-0 z-20 backdrop-blur-2xl">
          <div className="flex items-center justify-center h-screen p-4 ">
            <form
              onSubmit={handleAddProductSubmit}
              action=""
              className="shadow-[0_0_20px_rgba(0,0,0,0.25)] px-4 py-12 "
            >
              <div className="flex items-center justify-between mb-10">
                <h1 className="font-poppins font-bold text-xl text-gray-500 text-center">
                  Add new product
                </h1>
                <button
                  type="button"
                  onClick={() => setShowProductForm(!showProductForm)}
                >
                  <TbXboxXFilled size={32} className="text-red-500" />
                </button>
              </div>
              <input
                type="text"
                name="productName"
                value={products.productName}
                onChange={handleProductChange}
                placeholder="Product Name"
                className=" rounded font-poppins font-normal text-sm px-2 py-2 w-full mb-6 outline-none  border"
              />

              <input
                type="text"
                name="productPrice"
                value={products.productPrice}
                onChange={handleProductChange}
                placeholder="Product Price"
                className=" rounded font-poppins font-normal text-sm px-2 py-2 w-full mb-6 outline-none  border"
              />

              <select
                className=" rounded font-poppins font-normal text-sm px-2 py-2 w-full mb-6 outline-none  border"
                name="category"
                value={products.category}
                onChange={handleProductChange}
              >
                <option>Select Category</option>
                {availableCategory.map((curElem, index) => (
                  <option key={index}>{curElem.category}</option>
                ))}
              </select>

              <input
                type="text"
                name="productImage"
                value={products.productImage}
                onChange={handleProductChange}
                placeholder="Product Image"
                className=" rounded font-poppins font-normal text-sm px-2 py-2 w-full mb-6 outline-none  border"
              />
              <Button type="submit">Add </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ManageMenuItem;
