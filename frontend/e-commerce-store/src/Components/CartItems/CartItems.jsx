import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
  const { user, setUser } = useContext(AuthContext);

  const hasItemsInCart = Object.values(cartItems).some(qty => qty > 0);
  return (
    <main className='cartitems' aria-label='Shopping Cart'>
      <div className="cart-items-format-main" role='row'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      <hr />

      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return <div key={e.id} role='row' aria-label={`Cart item:${e.name}`}>

            <div className="cartitems-format cart-items-format-main">
              <img src={e.image} alt='' className='carticon-product-icon' />
              <p>{e.name}</p>
              <p>R {e.new_price}</p>
              <button className='cart-items-quantity'>{cartItems[e.id]}</button>
              <p>R {Math.round(e.new_price) * cartItems[e.id]}</p>
              <button
                className='cart-items-remove-icon '
                aria-label={`Remove ${e.name} from cart.`}
                onClick={() => { removeFromCart(e.id) }}
              >
                <img src={remove_icon} alt={`Remove ${e.name}`}></img>
              </button>

            </div>

            <hr />

          </div>
        }
        return null;
      })}


      <div className="cartitems-down" aria-label='Cart Summary'>
        <div className="cartitems-total">
          <h1 tabIndex="0" >Total</h1>
          <div>
            <div className="cartitems-total-item" role='group' aria-label="Subtotal">
              <p>Subtotal</p>
              <p>R{getTotalCartAmount().toFixed(2)}</p>
            </div>

            <hr />

            <div className="cartitems-total-item" role='group' aria-label="Shipping Fee">
              <p>Shipping Fee</p>
              <p>Free </p>
            </div>

            <hr />

            <div className="cartitems-total-item" role='group' aria-label="Final Total">
              <h3>Total</h3>
              <h3>R{getTotalCartAmount().toFixed(2)}</h3>
            </div>
          </div>

          {/* code below conditionally renders proceed to checkout 
            i have made sure that the user is required to satisfy numerous conditions before proceeding
            1.user not logged in => "please log in to continue"
            2.user logged in but cart is emppty =>"your cart is empty"
            3.user logged in and cart has items => activates button
          
          */}
          {!user ? (

            <div className="auth-false" aria-live='polite'>
              <button className='checkout-btn' disableds aria-disabled="true">Proceed To Checkout</button>
              <p>Please <Link to="/signup" aria-label='Log in or sign up'>Log In</Link> To Continue.</p>
            </div>
          ) : !hasItemsInCart ? (

            <div className="auth-false" aria-live='polite'>
              <button className='checkout-btn' disabled aria-disabled="true">Proceed To Checkout</button>
              <p>Your cart is empty.</p>
            </div>
          ) : (

            <div className="auth-true">
              <Link to="./checkout" className="checkout-btn" aria-label="Proceed to Checkout">
                <button>
                  Proceed To Checkout
                </button>
              </Link>
            </div>
          )}

          <Link to='/shop'>
            <p className='continue-shopping' aria-label='Continue Shopping for more products.'>
              Continue shopping
            </p>
          </Link>
        </div>
      </div>

    </main>
  )
}

export default CartItems