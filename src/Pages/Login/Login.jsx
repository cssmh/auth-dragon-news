import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../HomeLayout/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {

    const {loginUser} = useContext(AuthContext)
    const navigateTo = useNavigate()
    const location = useLocation()
    console.log(location.state);

    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        loginUser(email, password)
        .then(res => {
            console.log(res.user);
            toast.success("logged in success")
            navigateTo(location.state ? location.state : "/")
        })
        .catch(err => {
            toast.error(err.message)
        })
    }

  return (
    <div className="bg-[#F3F3F3]">
      <Navbar></Navbar>
      <div className="hero min-h-[88vh]">
        <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
          <h1 className="text-2xl text-center pt-7 font-semibold border-b pb-6 mx-8">
            Login your account
          </h1>
          <form onSubmit={handleLogin} className="card-body py-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email address</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover font-semibold"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-3">
              <button className="btn bg-[#403F3F] hover:bg-[#403F3F] text-white font-semibold">
                Login
              </button>
            </div>
          </form>
          <div className="text-center mb-6 text-sm font-semibold">
            <p>
              Dont’t Have An Account ?{" "}
              <Link to={"/register"} className="text-red-500">
                Register
              </Link>
            </p>
          </div>
          <Toaster/>
        </div>
      </div>
    </div>
  );
};

export default Login;
