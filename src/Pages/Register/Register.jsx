import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../HomeLayout/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const {createUser, updateNamePhoto} = useContext(AuthContext)
  const navigateTo = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const checked = e.target.terms.checked
    
    if(password.length < 6){
      toast.error("Password must 6 character or more")
      return
    }else if(!checked){
      toast.error("Accept terms & condition")
      return
    }

    createUser(email, password)
    .then(res=> {
      toast.success("success reg")
      console.log(res.user);
      updateNamePhoto(name, photo)
      .then(()=> {
        toast.success("updated name, photo")
      })
      .catch(err=> [
        toast.error(err.message)
      ])
      navigateTo("/")
    })
    .catch(err => {
      toast.error(err.message)
    })
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-[88vh]">
        <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
          <h1 className="text-2xl text-center pt-7 font-semibold border-b pb-6 mx-8">
            Register your account
          </h1>
          <form onSubmit={handleRegister} className="card-body py-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter your Photo URL"
                className="input input-bordered"
                required
              />
            </div>
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
                <input type="checkbox" name="terms" id="" />
                <p className="text-sm ml-1">Accept Term & Conditions</p>
              </label>
            </div>
            <div className="form-control mt-2">
              <button className="btn bg-[#403F3F] hover:bg-[#403F3F] text-white font-semibold">
                Register
              </button>
            </div>
          </form>
          <div className="text-center mb-6 text-sm font-semibold">
            <p>
              Already Have An Account ?{" "}
              <Link to={"/login"} className="text-red-500">
                Login
              </Link>
            </p>
          </div>
          <Toaster/>
        </div>
      </div>
    </div>
  );
};

export default Register;
