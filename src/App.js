// import React, { Children, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider , Outlet } from "react-router-dom";
// import Grocery from "./components/Grocery";
import { lazy , Suspense, useEffect, useState } from "react";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(()=>import( "./components/Grocery"))

const AppLayout = () => {

  const [userName , setUserName] = useState('');

  useEffect(()=>{
    // make an api call 
    const data = {
      name : 'Ritik srivastava'
    }
    setUserName(data.name);
  },[])
  return (
    <div className="app">
      <Provider store={appStore}>
      <userContext.Provider value={{logedIn : userName , setUserName}}>
      <Header />
      <Outlet/>
      </userContext.Provider>
      </Provider>
    </div>
  );
};



const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children : [
      {
        path : "/",
        element : <Body/>
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path : "/contact",
        element : <Contact/>
      },
      {
        path : "/restaurant/:resId",
        element : <RestaurantMenu/>
      },
      {
        path : "/grocery",
        element : <Suspense fallback='loading'><Grocery/></Suspense>
      },
      {
        path : "/cart",
        element : <Cart/>
      }

    ],
    errorElement : <Error/>
  },


]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
