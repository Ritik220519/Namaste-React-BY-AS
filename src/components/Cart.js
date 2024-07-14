import { useDispatch, useSelector } from "react-redux";
import CategoryItemList from "./CategoryItemList";
import { clearCart } from "../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => 
    store.cart.items
  );

  const dispatch = useDispatch()

  const handleClearAllItem =()=>{
        dispatch(clearCart())
  }
  return (
    <div className="text-center m-4 p-3 ">
         <span className="flex justify-end"><button
              className="h-8 px-3 font-semibold rounded-md bg-black text-white "
              type="submit"
              onClick={() => 
                handleClearAllItem()
              }
            >
              clear All Item
            </button></span>
      <span className="text-2xl font-bold">Cart</span>
     
      <div className="w-6/12 m-auto">
      {cartItems.length === 0 && (
        <h1>cart is empty ! check out the Restaurant 😋</h1>
      )}
        <CategoryItemList itemList={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
