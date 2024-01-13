const CoffeeItem = () => {
  return (
    <div
      className="coffeeItem relative text-[#FEF7EE] p-2"
      style={{ width: "260px" }}
    >
      <div className="coffeePopular absolute top-3 left-3 bg-[#F6C768] text-[#111315] px-2 py-1 rounded-xl smallText m-1">
        Popular
      </div>
      <img
        className="coffeeImage rounded-xl pb-2"
        src="https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/house-coffee.jpg"
        alt=""
      />
      <div className="flex justify-between">
        <div className="coffeeTitle">House Coffee</div>
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
