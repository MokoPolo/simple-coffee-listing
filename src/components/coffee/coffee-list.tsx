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
    <div className="flex justify-center mt-[5%] h-full">
      <div className="bg-[#1B1D1F] text-[#FEF7EE] rounded-xl">
        <div className="flex flex-col items-center w-[250px] xl:w-[1000px] lg:w-[500px] m-[50px]">
          <h1 className="text-[#FEF7EE]">Our Collection</h1>
          <p className="text-[#6F757C] text-center">
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </p>
          <div className="flex justify-center w-full">
            <ul className="flex justify-center list-none">
              <li className="p-2 m-2 bg-[#6F757C] rounded-lg">All Products</li>
              <li className="p-2 m-2 ml-0 bg-[#6F757C] rounded-lg">
                Available Now
              </li>
            </ul>
          </div>
          <section className="w-[250px] xl:w-[1000px] lg:w-[500px] grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2">
            {coffeeData.map((coffee) => (
              <CoffeeItem coffee={coffee} key={coffee.id} />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};
export default CoffeeList;
