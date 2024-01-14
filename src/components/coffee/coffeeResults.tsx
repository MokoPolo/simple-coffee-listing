import { useEffect, useState } from "react";

const CoffeeResults = () => {
  const [coffeeData, setCoffeeData] = useState<Coffee[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
        );
        const data = await response.json();
        setCoffeeData(data);
      } catch (error) {
        console.error("Error fetching coffee data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {coffeeData.map((coffee) => (
        <div key={coffee.id}>
          <h3>{coffee.name}</h3>
          <p>{coffee.description}</p>
          {/* Render other coffee data properties */}
        </div>
      ))}
    </div>
  );
};

export default CoffeeResults;
