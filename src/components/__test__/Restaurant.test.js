import { render , screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCKS_DATA from "../Mocks/resCardMocks.json"
import "@testing-library/jest-dom"

test('should load Restaurant component with name', () => {

    render(<RestaurantCard resData={MOCKS_DATA}/>)

    const name = screen.getByText(/"Chinese Wok"/)

    expect(name).toBe()
  
})
