import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import one from "../../assets/1.png";
import two from "../../assets/2.png";
import three from "../../assets/3.png";

const LeftCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <div className="font-semibold space-y-3 space-x-3 md:space-x-0 mb-5 mx-5 lg:mx-0">
        <h1 className="text-xl">All Category {categories.length}</h1>
        {categories.map((category) => (
          <NavLink to={"/"} className="block" key={category.id}>
            {category.name}
          </NavLink>
        ))}
      </div>
      <div className="space-y-1">
        <div className="space-y-2 text-center md:text-left">
          <img className="mx-auto md:ml-0" src={one} alt="" />
          <p>
            Bayern Slams Authorities Over<br></br> Flight Delay to Club World
            Cup
          </p>
        </div>
        <div className="space-y-2 text-center md:text-left">
          <img className="mx-auto md:ml-0" src={two} alt="" />
          <p>
            Bayern Slams Authorities Over<br></br> Flight Delay to Club World
            Cup
          </p>
        </div>
        <div className="space-y-2 text-center md:text-left">
          <img className="mx-auto md:ml-0" src={three} alt="" />
          <p>
            Bayern Slams Authorities Over<br></br> Flight Delay to Club World
            Cup
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeftCategory;
