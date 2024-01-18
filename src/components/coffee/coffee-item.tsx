type Props = {
  coffee: Coffee;
};

const CoffeeItem: React.FC<Props> = ({ coffee }) => {
  return (
    <div className="coffeeItem relative text-[#FEF7EE] p-2 max-w-[16rem]">
      {coffee.popular && (
        <div className="coffeePopular absolute top-3 left-3 bg-[#F6C768] text-[#111315] px-2 py-1 rounded-xl smallText m-1">
          Popular
        </div>
      )}
      <img className="coffeeImage rounded-xl pb-2" src={coffee.image} alt="" />
      <div className="flex justify-between">
        <div className="coffeeTitle">{coffee.name}</div>
        <div className="coffeePrice priceText bg-[#BEE3CC] text-[#111315] px-2 py-1 rounded">
          {coffee.price}
        </div>
      </div>
      <div className="flex">
        {coffee.rating > 0 ? (
          <img src="./images/Star_fill.svg" alt="" className="pl-1" />
        ) : (
          <img src="./images/Star.svg" alt="" className="pl-1" />
        )}
        <div className="coffeeRating pl-1 align-middle">{coffee.rating}</div>
        <div className="coffeeVotes whitespace-nowrap smallText pl-1 items-center flex text-[#6F757C] align-middle">
          ({coffee.votes} votes)
        </div>
        {!coffee.available && (
          <div className="text-[#ED735D] w-full text-right p-1 label">
            Sold out!
          </div>
        )}
        <div className="flex-grow"></div>
      </div>
    </div>
  );
};
export default CoffeeItem;

// https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json
