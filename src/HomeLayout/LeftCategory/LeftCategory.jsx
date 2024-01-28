import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="font-semibold space-y-3">
      <h1>All Category {categories.length}</h1>
      {categories.map((category) => (
        <NavLink
          to={`/category/${category.id}`}
          className={({ isActive }) =>
            isActive ? "block text-green-600" : "block"
          }
          key={category.id}
        >
          {category.name}
        </NavLink>
      ))}
    </div>
  );
};

export default LeftCategory;
