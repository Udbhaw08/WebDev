import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom"; // Make sure it's react-router-dom
import { MENU_API_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_API_URL + resId);
      const json = await data.json();
      
      // 💡 Always log the data to inspect its structure!
      console.log("API Data:", json.data);
      setResInfo(json.data);

    } catch (error) {
      console.error("Fetch failed:", error);
    }
  };

  // Use a more robust check. If resInfo is null, show Shimmer.
  if (resInfo === null) {
    return <Shimmer />;
  }

  // Safely find the restaurant info and menu items from the cards array
  // The 'info' card is usually the one with the specific @type
  const restaurantInfoCard = resInfo?.cards?.find(
    (c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
  );
  
  const { name, cuisines, costForTwoMessage } = restaurantInfoCard?.card?.card?.info || {};

  // The 'itemCards' are usually in a 'groupedCard'
  const itemCards = resInfo?.cards?.find(c => c.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards
    ?.map(c => c?.card?.card)
    ?.filter(c => c?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    ?.flatMap(c => c.itemCards) || [];


  // If after all that we still don't have the name, something is wrong with the data.
  // We can show a message or the shimmer again.
  if (!name) {
    return <Shimmer />; // or return <h2>Restaurant data not found.</h2>
  }

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines?.join(", ")} - {costForTwoMessage}</p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - ₹{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;