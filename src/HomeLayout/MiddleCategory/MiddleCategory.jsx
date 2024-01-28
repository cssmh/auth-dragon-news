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
      <h1 className="text-2xl font-semibold mb-2">
        This Category News {allData.length}
      </h1>
      <div className="space-y-5">
        {allData.slice(0, 10).map((data, idx) => (
          <Card key={idx} getData={data}></Card>
        ))}
      </div>
    </div>
  );
};

export default MiddleCategory;
