import { FaRegEye } from "react-icons/fa";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Card = ({ getData }) => {
  //   console.log(getData);
  const { author, title, image_url, details, rating, total_view, _id } = getData;
  return (
    <div className="border border-gray-300 rounded-lg">
      <div className="flex items-center gap-2 p-3 bg-gray-100">
        <img className="w-10 rounded-2xl" src={author.img} alt="" />
        <div>
          <h1>{author?.name}</h1>
          <p>{author.published_date}</p>
        </div>
      </div>
      <div className="m-4">
        <p className="font-semibold pb-1">{title}</p>
        <img src={image_url} alt="" />
        <p className="my-3 text-sm text-gray-500">
          {details.length > 200 ? (
            <p>
              {details.slice(0, 200)} <Link to={`/news/${_id}`} className="text-blue-500"> Read more</Link>{" "}
            </p>
          ) : (
            <p>{details}</p>
          )}
        </p>
      </div>
      <div className="border-t-2 bg-gray-100">
        <div className="p-4 flex justify-between">
          <p>{rating.number}</p>
          <p className="flex items-center gap-1">
            {" "}
            <FaRegEye /> {total_view}
          </p>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  getData: PropTypes.object,
};

export default Card;
