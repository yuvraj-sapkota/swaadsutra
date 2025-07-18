import MobileMenu from "./MobileMenu";
import MenuForLaptop from "./MenuForLaptop";
import MenuCategory from "./MenuCategory";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [menuDatas, setMenuDatas] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryActive, setCategoryActive] = useState(null);
  const { restaurantId } = useParams();
  const menuItems = async () => {
    // const restaurantId = localStorage.getItem("restaurantId");

    try {
      const res = await fetch(
        `https://swaadsutra.onrender.com/api/public/menu/${restaurantId}`,
        {
          method: "GET",
        }
      );

      const data = await res.json();
      const items = data.menuItems;

      setMenuDatas(items);
      console.log(items);
    } catch (error) {
      console.log("Error while fetching menu items from the backend ", error);
    }
  };

  const fetchCategory = async () => {
    // const restaurantId = localStorage.getItem("restaurantId");
    try {
      const res = await fetch(
        `https://swaadsutra.onrender.com/api/public/category/${restaurantId}`,
        {
          method: "GET",
        }
      );
      const data = await res.json();

      const items = data.categoryItems;
      setCategories(items);
      console.log("category items is ", items);

      if (items && items.length > 0) {
        setCategoryActive(items[0].category);
      } else {
        alert("Categories not available");
      }
    } catch (error) {
      console.log("Failed to fetch category", error);
    }
  };

  useEffect(() => {
    menuItems();
    fetchCategory();
  }, []);
  console.log(categories);
  console.log(categoryActive);

  const filteredMenu = menuDatas.filter(
    (item) => item.category === categoryActive
  );
  console.log(filteredMenu);

  return (
    <>
      <div className="md:max-w-[1300px]  md:mx-auto md:px-4  mt-6 md:flex md:items-start md:gap-20">
        <MenuCategory
          categories={categories}
          categoryActive={categoryActive}
          setCategoryActive={setCategoryActive}
        />

        {/* menu cart item  for mobile*/}

        <div>
          <MobileMenu menuDatas={filteredMenu} />
        </div>

        {/* menu item for big screen  */}
        <MenuForLaptop menuDatas={filteredMenu} />
      </div>
    </>
  );
};

export default RestaurantMenu;
