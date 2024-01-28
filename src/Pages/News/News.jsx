import { Link, useLoaderData, useParams } from "react-router-dom";
import Logo from "../../HomeLayout/Logo/Logo";
import Navbar from "../../HomeLayout/Navbar/Navbar";
import RightCategory from "../../HomeLayout/RightCategory/RightCategory";
import { useEffect, useState } from "react";
import Latest from "../../HomeLayout/Latet/Latest";
import one from "../../assets/1.png";
import two from "../../assets/2.png";
import three from "../../assets/3.png";

const News = () => {
  const [card, setCard] = useState([]);

  const { id } = useParams();
  const allData = useLoaderData();

  useEffect(() => {
    const bothMatch = allData.find((solo) => solo._id.includes(id));
    setCard(bothMatch);
  }, [allData, id]);

  const { image_url, title, details } = card;

  return (
    <div>
      <Logo></Logo>
      <Latest></Latest>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-3 gap-3">
        <div className="col-span-2 border border-gray-300">
          <div className="p-4">
            <img src={image_url} alt="" />
            <p className="py-3 font-semibold text-xl">{title}</p>
            <p className="text-gray-500">{details}</p>
            <Link to={"/"}>
              <button className="btn bg-red-600 text-white my-5">
                All news in this category
              </button>
            </Link>
            <div className="flex gap-3">
              <div className="space-y-2">
                <img src={one} alt="" />
                <p>
                  Bayern Slams Authorities Over Flight Delay to Club
                  World Cup
                </p>
              </div>
              <div className="space-y-2">
                <img src={two} alt="" />
                <p>
                  Bayern Slams Authorities Over Flight Delay to Club
                  World Cup
                </p>
              </div>
              <div className="space-y-2">
                <img src={three} alt="" />
                <p>
                  Bayern Slams Authorities Over Flight Delay to Club
                  World Cup
                </p>
              </div>
            </div>
          </div>
        </div>
        <RightCategory></RightCategory>
      </div>
    </div>
  );
};

export default News;
