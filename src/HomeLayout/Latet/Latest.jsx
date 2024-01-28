import Marquee from "react-fast-marquee";
const Latest = () => {
  return (
    <div className="flex">
      <p className="px-3 py-2 rounded-md text-white bg-red-600">Latest</p>
      <Marquee speed={120} className={"text-red-600 text-[15px] font-normal"}>
        Match Highlights: Germany vs Spain — as it happened ! Match Highlights:
        Germany vs Spain as...... You should have gone for the head!...... The greatest threat to our universe is you...
      </Marquee>
    </div>
  );
};

export default Latest;
