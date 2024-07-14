import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import { useContext } from "react";
import userContext from "../utils/userContext";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const userName = useContext(userContext)

  const [showIndex, setShowIndex] = useState(null);



  if (resInfo === null) return <Shimmer />;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log(resInfo?.cards);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  return (
    <div className="menu text-center">
      <h1 className="font-bold m-5 text-2xl">
        {resInfo?.cards[2]?.card?.card?.info?.name} - {userName.logedIn}
      </h1>
      <h4 className="font-bold text-lg">
        {resInfo?.cards[2]?.card?.card?.info?.cuisines.join(" ")} -{" "}
        {resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}
      </h4>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={index}
          categoryData={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
