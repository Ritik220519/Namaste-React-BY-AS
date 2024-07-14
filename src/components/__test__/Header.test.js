import { fireEvent, logDOM, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../redux/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("should check header component test cases ",()=>{

    test("should render header component with login button", () => {
        render(
          <BrowserRouter>
            <Provider store={appStore}>
              <Header />
            </Provider>
          </BrowserRouter>
        );
        const logInButton = screen.getByRole("button" ,{name : "login"});
      
        expect(logInButton).toBeInTheDocument();
      });
      
      test("should header component cart is 0", () => {
        render(
          <BrowserRouter>
            <Provider store={appStore}>
              <Header />
            </Provider>
          </BrowserRouter>
       );
          const cartItem = screen.getByText("Cart 0");
          expect(cartItem).toBeInTheDocument()
       
      });

      test("should change login button to logout on click in header component", () => {
        render(
          <BrowserRouter>
            <Provider store={appStore}>
              <Header />
            </Provider>
          </BrowserRouter>
        );
        const logInButton = screen.getByRole("button" ,{name : "login"});
        fireEvent.click(logInButton);
        const logOutButton = screen.getByRole("button" ,{name : "logout"});

        expect(logOutButton).toBeInTheDocument();
      });

});

