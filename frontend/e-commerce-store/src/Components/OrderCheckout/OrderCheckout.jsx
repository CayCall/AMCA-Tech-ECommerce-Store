import React, { useContext } from 'react';
import './OrderCheckout.css';
import { ShopContext } from '../../Context/ShopContext';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const OrderCheckout = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart, clearCart } = useContext(ShopContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const hasItemsInCart = Object.values(cartItems).some(qty => qty > 0);
        if (!hasItemsInCart) {
            toast.error(`Your cart is empty. Please add items before placing an order.`)
            return;
        }

        const inputs = form.querySelectorAll('input[required]');

        for (let input of inputs) {
            const value = input.value.trim();
            const placeholder = input.placeholder;

            if (!value) {
                toast.error(`Please fill out the "${placeholder}" field.`)
                input.focus();
                return;
            }


            if (placeholder === "Card Number" && !/^\d{13,19}$/.test(value)) {
                toast.error(`Enter a valid card number (13–19 digits).`)
                input.focus();
                return;
            }

            if (placeholder === "MM/YY" && !/^(0[1-9]|1[0-2])\/\d{2}$/.test(value)) {
                toast.error(`Enter expiry date in MM/YY format.`)
                input.focus();
                return;
            }

            if (placeholder === "CVV" && !/^\d{3,4}$/.test(value)) {
                toast.error(`Enter a valid 3 or 4 digit CVV.`)
                input.focus();
                return;
            }

            if (placeholder === "Postal Code" && !/^\d{4,10}$/.test(value)) {
                toast.error("Enter a valid postal code (4–10 digits).")
                input.focus();
                return;
            }

            if (placeholder === "Phone Number" && !/^\d{7,15}$/.test(value)) {
                toast.error("Enter a valid phone number (7–15 digits).")
                input.focus();
                return;
            }
        }

        if (!form.terms.checked) {
            toast.error('You must agree to the Terms and Conditions.');
            return;
        }

        toast.success("Order Placed Successfully!");
        handleFormClear(form);
    };

    const handleFormClear = (form) => {
        form.reset();
        clearCart();
    }

    return (
        <div className='checkout-section'>
            <form className="checkout-form" onSubmit={handleSubmit}>
                <h1>Secure Checkout</h1>
                <div className="checkout-wrapper">
                    <div className="checkout-wrapper-left">
                        <h3>1. Order Summary</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Qty</th>
                                    <th>Price</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {all_product.map((product) => {
                                    if (cartItems[product.id] > 0) {
                                        return (
                                            <tr key={product.id}>
                                                <td>{product.name}</td>
                                                <td>{cartItems[product.id]}</td>
                                                <td>R {product.new_price * cartItems[product.id]}</td>
                                                <td>
                                                    <button onClick={() => removeFromCart(product.id)}>Remove</button>
                                                </td>
                                            </tr>
                                        );
                                    }
                                    return null;
                                })}
                            </tbody>
                        </table>
                        <div className='total-section'>
                            <p className="order-total">ORDER TOTAL: R {getTotalCartAmount()}</p>
                        </div>
                    </div>
                    <div className="checkout-wrapper-middle">
                        <h3>2. Delivery Address</h3>
                        <div className="address-form">
                            <input type="text" placeholder="Full Name" required />
                            <input type="text" placeholder="Street Address" required />
                            <input type="text" placeholder="City" required />
                            <input type="text" placeholder="Province" required />
                            <input type="text" placeholder="Postal Code" required />
                            <input type="tel" placeholder="Phone Number" required />
                        </div>
                    </div>
                    <div className="checkout-wrapper-right">
                        <h3>3. Confirmation</h3>
                        <div className="payment-form">
                            <input type="text" placeholder="Cardholder Name" required />
                            <input type="text" placeholder="Card Number" required maxLength="19" />
                            <div className="payment-row">
                                <input type="text" placeholder="MM/YY" required maxLength="5" />
                                <input type="text" placeholder="CVV" required maxLength="4" />
                            </div>
                            <div className="terms">
                                <input type="checkbox" id="terms" required />
                                <label htmlFor="terms">I agree to the Terms and Conditions</label>
                            </div>
                            <button className="confirm-btn" type="submit">Place Order</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default OrderCheckout;
