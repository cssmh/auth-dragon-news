import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const RightCategory = () => {
  return (
    <div>
      <div className="mb-5">
        <h1 className="font-semibold text-xl mb-3">Login With</h1>
        <button className="flex justify-center items-center text-blue-600 gap-1 border p-2 border-blue-500 w-full text-center rounded-md mb-2">
          {" "}
          <FaGoogle /> Login with Google
        </button>
        <button className="flex justify-center items-center text-black gap-1 border p-2 border-black w-full text-center rounded-md">
          {" "}
          <FaGithub /> Login with Github
        </button>
      </div>
      <div>
        <h1 className="font-semibold text-xl mb-3">Follow us on</h1>
        <p className="pl-3 py-2 flex items-center gap-1 border border-gray-300 rounded-t-lg"> <FaFacebook /> Facebook</p>
        <p className="pl-3 py-2 flex items-center gap-1 border-x border-gray-300"> <FaTwitter /> Twitter</p>
        <p className="pl-3 py-2 flex items-center gap-1 border border-gray-300 rounded-b-lg"> <FaInstagram /> Instagram</p>
      </div>
    </div>
  );
};

export default RightCategory;
