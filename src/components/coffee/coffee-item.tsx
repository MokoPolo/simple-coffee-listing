const CoffeeItem = (key: string) => {
  // console.log(coffee);
  return (
    <div
      key={key}
      className="coffeeItem relative text-[#FEF7EE] p-2"
      style={{ width: "260px" }}
    >
      <div className="coffeePopular absolute top-3 left-3 bg-[#F6C768] text-[#111315] px-2 py-1 rounded-xl smallText m-1">
        Popular
      </div>
      {/* <img
        className="coffeeImage rounded-xl pb-2"
        src={coffee.coffee.image}
        alt=""
      /> */}

      <div className="flex justify-between">
        <div className="coffeeTitle">House Coffee</div>
        <div className="coffeePrice priceText bg-[#BEE3CC] text-[#111315] px-3 py-1 rounded">
          {/* {foo} */}
        </div>
      </div>
      <div className="flex">
        <img src="./images/Star_fill.svg" alt="" className="pl-1" />
        {/* <div className="coffeeRating pl-1">{coffee.coffee.rating}</div> */}
        <div className="coffeeVotes smallText pl-1">
          {/* ({coffee.coffee.votes} votes) */}
        </div>
      </div>
    </div>
  );
};
export default CoffeeItem;

// https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json
