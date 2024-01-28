import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

import q1 from "../../assets/qZone1.png";
import q2 from "../../assets/qZone2.png";
import q3 from "../../assets/qZone3.png";

import bg from "../../assets/bg1.png";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const RightCategory = () => {

  const { googlePopupLogin, githubPopupLogin } = useContext(AuthContext)
  const handlePopupGoogleLogin = () => {
    googlePopupLogin()
    .then(res => {
      console.log(res.user);
      toast.success("Success google login")
    })
    .catch(err => {
      toast.error(err.message)
    })
  }
  const handlePopupGithubLogin = () => {
    githubPopupLogin()
    .then(res => {
      console.log(res.user);
      toast.success("Success github login")
    })
    .catch(err => {
      toast.error(err.message)
    })
  }
  return (
    <div>
      <div className="mb-5">
        <h1 className="font-semibold text-xl mb-3 mx-3 lg:mx-0">Login With</h1>
        <button onClick={handlePopupGoogleLogin} className="flex justify-center items-center text-blue-600 gap-1 border p-2 border-blue-500 w-4/5 mx-auto lg:w-full text-center rounded-md mb-2">
          {" "}
          <FaGoogle /> Login with Google
        </button>
        <button onClick={handlePopupGithubLogin} className="flex justify-center items-center text-black gap-1 border p-2 border-black w-4/5 mx-auto lg:w-full text-center rounded-md">
          {" "}
          <FaGithub /> Login with Github
        </button>
      </div>
      <div>
        <h1 className="font-semibold text-xl mb-3 mx-3 lg:mx-0">Follow us on</h1>
        <Link to={"/"}>
          <p className="pl-3 py-2 flex items-center gap-1 border border-gray-300 rounded-t-lg mx-3 lg:mx-0">
            {" "}
            <FaFacebook /> Facebook
          </p>
        </Link>
        <Link to={"/"}>
          <p className="pl-3 py-2 flex items-center gap-1 border-x border-gray-300 mx-3 lg:mx-0">
            {" "}
            <FaTwitter /> Twitter
          </p>
        </Link>
        <Link to={"/"}>
          <p className="pl-3 py-2 flex items-center gap-1 border border-gray-300 rounded-b-lg mx-3 lg:mx-0">
            {" "}
            <FaInstagram /> Instagram
          </p>
        </Link>
      </div>
      <div className="my-4 bg-[#F3F3F3]">
        <h1 className="text-xl pl-4 py-3">Q-Zone</h1>
        <img className="mx-auto" src={q1} alt="" />
        <img className="mx-auto" src={q2} alt="" />
        <img className="mx-auto" src={q3} alt="" />
      </div>
      <div>
        <div
          className="hero min-h-[70vh]"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-4xl font-bold">
                Create an Amazing Newspaper
              </h1>
              <p className="mb-5">
                Discover thousands of options, easy to customize layouts,
                one-click to import demo and much more.
              </p>
              <button className="btn bg-red-600 text-white border-none">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>  
      <Toaster/>
    </div>
  );
};

export default RightCategory;
