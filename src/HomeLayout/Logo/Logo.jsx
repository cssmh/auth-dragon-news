import logo from "../../assets/logo.png";
import moment from "moment";
const Logo = () => {
  return (
    <div className="my-6">
      <img className="mx-auto" src={logo} alt="" />
      <p className="text-center text-[#706F6F] my-3 text-sm">
        Journalism Without Fear or Favour
      </p>
      <p className="text-center"> {moment().format("dddd, MMMM D, YYYY")} </p>
    </div>
  );
};

export default Logo;
