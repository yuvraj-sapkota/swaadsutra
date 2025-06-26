import { createContext, useContext, useEffect, useState } from "react";

const CategoryContext = createContext();

export const CategoryProvider = ({ Children }) => {
  const [availableCategory, setAvailableCategory] = useState([]);

  const getAllCategories = async () => {
    try {
      const res = await fetch(
        "http://localhost:8000/api/category/getCategory",
        {
          method: "GET",
        }
      );
      const data = await res.json();

      console.log("all the categories from backend are", data.allCategory);
      setAvailableCategory(data.allCategory);
    } catch (error) {
      console.log("Error while fetching categories", error);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <CategoryContext.Provider value={{ availableCategory, getAllCategories }}>
      {Children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => useContext(CategoryContext);
