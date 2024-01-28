import navPhoto from "../../assets/user.png"
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const allNavbar = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/career"}>Career</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 mb-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {allNavbar}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{allNavbar}</ul>
      </div>
      <div className="navbar-end gap-2">
        <div className="avatar">
          <div className="w-11 rounded-full">
            <img src={navPhoto} />
          </div>
        </div>
        <Link className="bg-[#403F3F] text-white px-7 py-2" to={"/login"}>Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
