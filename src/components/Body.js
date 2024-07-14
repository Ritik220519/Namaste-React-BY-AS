import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRes, setListofRes] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  // const RestaurantIsOpen = IsOpenRestaurant(RestaurantCard);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5767599&lng=77.32310939999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTIN"
    );

    const json = await data.json();
    // console.log(
    //   json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    setListofRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listOfRes.length === 0) {
    return (
      <h1>
        <Shimmer />
      </h1>
    );
  }
  return (
    <div className="body bg-red-50">
      <div className="filter p-3">
        <input
          type="text"
          className="search-box border border-solid rounded-lg"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="px-4 py-1 bg-green-200 m-3 rounded-lg"
          onClick={() => {
            const filterRestaurant = listOfRes.filter((res) =>
              res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filterRestaurant);
          }}
        >
          Search
        </button>

        <button
          className="filter-btn px-4 py-1 bg-gray-200 m-3 rounded-lg"
          onClick={() => {
            let filterRes = listOfRes.filter(
              (res) => res?.info?.avgRating > 4.2
            );
            setFilteredRestaurant(filterRes);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container px-5 flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurant/" + restaurant?.info?.id}
          >
            <RestaurantCard resData={restaurant} />
{/*  
      this code is for lable promoted
            {restaurant?.info?.promoted ? (<RestaurantIsOpen resData={restaurant}/>) : (<RestaurantCard resData={restaurant}/>)} */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
