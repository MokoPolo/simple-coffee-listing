const CoffeeItem = () => {
  return (
    <div
      className="coffeeItem text-[#FEF7EE] p-2"
      style={{ border: "1px solid red" }}
    >
      <img
        className="coffeeImage rounded-xl pb-2"
        src="https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/house-coffee.jpg"
        alt=""
      />
      <div className="flex justify-between">
        <div className="coffeeTitle p-1">House Coffee</div>
        <div className="coffeePrice priceText bg-[#BEE3CC] text-[#111315] px-3 py-1 rounded">
          $3.50
        </div>
      </div>
      <div className="flex">
        <img src="./images/Star_fill.svg" alt="" className="pl-1" />
        <div className="coffeeRating pl-1">4.85</div>
        <div className="coffeeVotes smallText pl-1">(15 votes)</div>
      </div>
    </div>
  );
};
export default CoffeeItem;

// https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json
