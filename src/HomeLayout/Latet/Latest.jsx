import Marquee from "react-fast-marquee";
const Latest = () => {
  return (
    <div className="flex mx-4 lg:mx-0">
      <p className="px-3 py-2 rounded-md text-white bg-red-600">Latest</p>
      <Marquee speed={120} className={"text-red-600 text-[15px] font-normal"}>
        I told you, you die for that...... You should have gone for the head!...... The greatest threat to our universe is you...... things just got out of hands...... The hardest choices requires strongest will!......
      </Marquee>
    </div>
  );
};

export default Latest;
