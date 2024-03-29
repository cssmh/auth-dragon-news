import { useEffect, useState } from "react";
import Card from "./Card";

const MiddleCategory = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-2 mx-3 lg:mx-0">
        This Category News {allData.length}
      </h1>
      <div className="space-y-5">
        {allData.slice(1, 10).map(data => (
          <Card key={data._id} getData={data}></Card>
        ))}
      </div>
    </div>
  );
};

export default MiddleCategory;
