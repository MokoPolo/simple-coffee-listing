import CoffeeItem from "./coffee-item";

import { useState, useEffect } from "react";

const CoffeeList = () => {
  const [coffeeData, setCoffeeData] = useState<Coffee[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
      );
      const data = await response.json();

      setCoffeeData(data);
    };

    fetchData();
  });

  return (
    <div className="bg-[#1B1D1F] text-[#FEF7EE] border border-red-500 border-solid border-1 min-h-screen">
      <h1 className="text-[#FEF7EE]">Our Collection</h1>
      <p className="text-[#6F757C]">
        Introducing our Coffee Collection, a selection of unique coffees from
        different roast types and origins, expertly roasted in small batches and
        shipped fresh weekly.
      </p>
      <div className="flex">
        <ul style={{ display: "flex", listStyle: "none" }}>
          <li style={{ flex: "1", background: "#6F757C", padding: "10px" }}>
            All Products
          </li>
          <li style={{ flex: "1", background: "#6F757C", padding: "10px" }}>
            Available Now
          </li>
        </ul>
      </div>
      {coffeeData.map((key) => (
        <CoffeeItem key={key} />
      ))}
    </div>
  );
};
export default CoffeeList;
