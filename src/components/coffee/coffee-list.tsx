import CoffeeItem from "./coffee-item";

const CoffeeList = () => {
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
      <CoffeeItem />
      <CoffeeItem />
      <CoffeeItem />
      <CoffeeItem />
      <CoffeeItem />
      <CoffeeItem />
    </div>
  );
};

export default CoffeeList;
