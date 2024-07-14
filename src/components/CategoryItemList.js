import { useDispatch } from "react-redux";
import { LOGO_URL } from "../utils/constants";
import { addItem } from "../redux/cartSlice";

const CategoryItemList = ({ itemList }) => {
  // console.log(itemList);
  const dispatch = useDispatch()
  

  const handleAddItemCart = (item)=>{
      dispatch(addItem(item))
  }
  return (
    <div>
      {itemList.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-grey border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-bold text-lg">
                {item?.card?.info?.name}
              </span>
              <span className="font-bold text-lg">
                -₹{" "}
                {item?.card?.info?.defaultPrice / 100 ||
                  item?.card?.info?.price / 100}
              </span>
            </div>
            <p className="text-sm">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <button
              className="h-8 px-3 font-semibold rounded-md bg-black text-white absolute justify-between"
              type="submit"
              onClick={() => 
                handleAddItemCart(item)
              }
            >
              Add
            </button>
            <img
              className="w-full"
              src={LOGO_URL + item?.card?.info?.imageId}
              alt="No image"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryItemList;
