import { useState } from "react";
import CategoryItemList from "./CategoryItemList";


const RestaurantCategory = ({ categoryData , showItems, setShowIndex }) => {

  const { title } = categoryData;

  const handleClick = () => {
    setShowIndex()
  };

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-slate-100 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className=" font-bold text-base ">
            {title} ({categoryData?.itemCards?.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <CategoryItemList itemList={categoryData?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
