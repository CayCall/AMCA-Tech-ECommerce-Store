import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import { Link } from 'react-router-dom';

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
  return (
    <div className='cartitems'>
      <div className="cart-items-format-main">
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
          return <div>
            <div className="cartitems-format cart-items-format-main">
              <img src={e.image} alt='' className='carticon-product-icon' />
              <p>{e.name}</p>
              <p>R {e.new_price}</p>
              <button className='cart-items-quantity'>{cartItems[e.id]}</button>
              <p>R {Math.round(e.new_price) * cartItems[e.id]}</p>
              <img className='cart-items-remove-icon ' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt=''></img>
            </div>
            <hr />
          </div>
        }
        return null;
      })}


      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Total</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>R{getTotalCartAmount().toFixed(2)}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free </p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>R{getTotalCartAmount().toFixed(2)}</h3>
            </div>
          </div>
          <Link to='./checkout' className='checkout-btn'><button>Proceed To Checkout</button></Link>

        </div>
      </div>

    </div>
  )
}

export default CartItems