import { render , screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

test('should load contact us component', () => {
    //load jsDom 
    render(<Contact/>)

    // querying
    const heading = screen.getByRole("heading")

    //Assert
    expect(heading).toBeInTheDocument();
  
});

test("should check all input boxes",()=>{
    render(<Contact/>)

    const inputBoxes = screen.getAllByRole("textbox")

    expect(inputBoxes.length).toBe(2)
});

// test("should placeholder to assert in the dom" , ()=>{

//     render(<Contact/>)

//     const inputName = screen.getByPlaceholderText("name")

//     expect(inputName).toBeInTheDocument()
// })
