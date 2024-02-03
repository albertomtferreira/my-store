import { screen } from "@testing-library/react";
import Navigation from "../navigation.component";
import { renderWithProviders } from "../../../utils/test/test.utils";

describe("Navigation", () => {
  test("It should render SignIn if no currentUser", () => {
    renderWithProviders(<Navigation />,{
      preloadedState: {
        user: {
          currentUser: null,
        }
      }
    })
    expect(screen.getByText(/sign in/i)).toBeInTheDocument()
    expect(screen.queryByText(/sign out/i)).not.toBeInTheDocument()
  })
  test("It should render SignOut if currentUser", () => {
    renderWithProviders(<Navigation />,{
      preloadedState: {
        user: {
          currentUser: {}
        }
      }
    })
    expect(screen.getByText(/sign out/i)).toBeInTheDocument()
    expect(screen.queryByText(/sign in/i)).not.toBeInTheDocument()
  })
  // test("It should not render a cart dropdown if isCartOpen is false", () => {
  //   renderWithProviders(<Navigation />,{
  //     preloadedState: {
  //       ui: {
  //         isCartOpen: false,
  //         cartItems:[]
  //       }
  //     }
  //   })
  //   expect(screen.queryByText(/checkout/i)).not.toBeInTheDocument()
  //   expect(screen.queryByText(/your cart is empty/i)).not.toBeInTheDocument()
  // })
  // test("It should render a cart dropdown if isCartOpen is true", () => {
  //   renderWithProviders(<Navigation />,{
  //     preloadedState: {
  //       ui: {
  //         isCartOpen: true,
  //         cartItems:[]
  //       }
  //     }
  //   })
  //   // expect(screen.queryByText(/checkout/i)).toBeInTheDocument()
  //   expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument()
  // })

})