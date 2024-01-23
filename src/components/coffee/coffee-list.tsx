import CoffeeItem from "./coffee-item";

import { useState, useEffect } from "react";

const CoffeeList = () => {
  const [coffeeData, setCoffeeData] = useState<Coffee[]>([]);
  // Cheap way to keep original state so we don't keep pinging the API
  const [originalCoffeeData, setoriginalCoffeeData] = useState<Coffee[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
      );
      const data = await response.json();

      setCoffeeData(data);
      // Easy way to copy data since this is just a simple project
      setoriginalCoffeeData(JSON.parse(JSON.stringify(data)));
    };

    fetchData();
  }, []);
  const setButtons = (allProductsButtonSelected: boolean) => {
    const allProductsButton = document.getElementById("allProducts");
    const availableNowButton = document.getElementById("availableNow");
    if (allProductsButtonSelected) {
      allProductsButton?.classList.add("bg-[#6F757C]");
      allProductsButton?.classList.remove("bg-[#1B1D1F]");
      availableNowButton?.classList.add("bg-[#1B1D1F]");
      availableNowButton?.classList.remove("bg-[#6F757C]");
    } else {
      availableNowButton?.classList.add("bg-[#6F757C]");
      availableNowButton?.classList.remove("bg-[#1B1D1F]");
      allProductsButton?.classList.add("bg-[#1B1D1F]");
      allProductsButton?.classList.remove("bg-[#6F757C]");
    }
  };
  const filterData = (available: boolean) => {
    if (available) {
      const filteredData = coffeeData.filter(
        (coffee) => coffee.available === available
      );
      setCoffeeData(filteredData);
      setButtons(false);
    } else {
      setCoffeeData(JSON.parse(JSON.stringify(originalCoffeeData)));
      setButtons(true);
    }
  };
  return (
    <div className="flex justify-center mt-[5%]">
      <div className="bg-[#1B1D1F] text-[#FEF7EE] rounded-xl">
        <div className="flex flex-col items-center w-[250px] xl:w-[1000px] lg:w-[500px] m-[50px]">
          <div
            className="flex flex-col items-center"
            style={{
              backgroundImage: "url(./images/vector.svg)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right",
            }}
          >
            <h1 className="text-[#FEF7EE] h-[100px] flex items-end">
              Our Collection
            </h1>
            <p className="text-[#6F757C] text-center lg:w-[450px] lg:h-[100px] flex items-center">
              Introducing our Coffee Collection, a selection of unique coffees
              from different roast types and origins, expertly roasted in small
              batches and shipped fresh weekly.
            </p>
          </div>
          <div className="flex justify-center w-full">
            <ul className="flex justify-center list-none">
              <li
                id="allProducts"
                className="py-2 m-2 px-4 bg-[#6F757C] rounded-lg cursor-pointer"
                onClick={() => filterData(false)}
              >
                All Products
              </li>
              <li
                className="py-2 m-2 ml-0 px-4 bg-[#1B1D1F] rounded-lg cursor-pointer"
                onClick={() => filterData(true)}
                id="availableNow"
              >
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
