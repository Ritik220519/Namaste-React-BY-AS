import { useContext, useState } from "react";
import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("login");
  const onlineStatus = useOnlineStatus();

  const { userName, logedIn, setUserName } = useContext(userContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="header flex justify-between bg-pink-200">
      <div className="logo-container mx-2 my-2">
        <img
          className="logo w-16 rounded-full"
          src={CDN_URL}
          alt="header-logo"
        />
      </div>

      <div className="flex items-center"></div>

      <div className="navItems flex items-center">
        user Name :{" "}
        <input
          type="text"
          className="mt-2 mx-1 font-medium rounded-lg bg-pink-100 border border-gray"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <ul className="flex p-4 m-4 space-x-4 font-medium">
          <li>online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <Link to={"/"}>
            <li>Home</li>
          </Link>

          <Link to={"/about"}>
            <li>About</li>
          </Link>
          <Link to={"/contact"}>
            <li>contact</li>
          </Link>
          <Link to={"/grocery"}>
            <li>Grocery</li>
          </Link>
          <Link to={"/cart"}>
            <li>Cart {cartItems.length}</li>
          </Link>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "login"
                ? setbtnNameReact("logout")
                : setbtnNameReact("login");
            }}
          >
            {btnNameReact}
          </button>
          <li>{logedIn}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
("");
