import Latest from "../Latet/Latest";
import LeftCategory from "../LeftCategory/LeftCategory";
import Logo from "../Logo/Logo";
import MiddleCategory from "../MiddleCategory/MiddleCategory";
import Navbar from "../Navbar/Navbar";
import RightCategory from "../RightCategory/RightCategory";

const Home = () => {
  return (
    <div>
      <Logo></Logo>
      <Latest></Latest>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4 gap-3">
        <LeftCategory></LeftCategory>
        <div className="md:col-span-2">
          <MiddleCategory></MiddleCategory>
        </div>
        <RightCategory></RightCategory>
      </div>
    </div>
  );
};

export default Home;
