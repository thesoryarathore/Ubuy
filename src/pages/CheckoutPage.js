import React from "react"
import styled from "styled-components"
// import { PageHero, StripeCheckout } from "../components"
import { PageHero } from "../components"
// extra imports
import { useCartContext } from "../context/cart_context"
import { Link } from "react-router-dom"

const CheckoutPage = () => {
  const { cart } = useCartContext()
  return (
    <main>
      <PageHero title="checkout" />
      <Wrapper className="page">
        {cart.length < 1 ? (
          <div className="empty">
            <h2>Cart is Empty</h2>
            <Link to="/products" className="btn">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <h1> Checkout Need to Be added here</h1>
        )}
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
`

export default CheckoutPage
