import { useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import userContext from "../utils/userContext";

const RestaurantCard = ({resData}) => {
  // console.log(resData)

  
  // const {name , cloudinaryImageId , cuisines , avgRating , costForTwo ,  areaName} = resData;
    return (
      <div className="res-card mr-4 m-6 p-4   w-[200px] h-[500px] bg-red-200 rounded-lg hover:bg-red-300">
        <img
        className="res-logo rounded-lg"
          src={LOGO_URL + resData?.info?.cloudinaryImageId}
          alt="res logo"
        />
        <h4 className="font-bold py-3 px-2 ">{resData?.info?.name}</h4>
        <h4 className="font-normal ">{resData?.info?.cuisines.join(" ")}</h4>
        <h4 className="font-normal ">{resData?.info?.avgRating}*</h4>
        <h4 className="font-normal ">{resData?.info?.costForTwo}</h4>
  
      </div>
    );
  };

// code for promoted lable (higher order component)
  // export const IsOpenRestaurant =(RestaurantCard)=>{
//   return ({resData})=>{
//     return (
//       <div>
//         <label >open</label>
//         <RestaurantCard {...resData}/>
//       </div>
//     )
//   }
//  }

  export default RestaurantCard;