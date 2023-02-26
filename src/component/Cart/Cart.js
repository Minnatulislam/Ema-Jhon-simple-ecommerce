import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }

    const tax = parseFloat((total * 10/100).toFixed(3))
    const grandTotal = (total + shipping + tax).toFixed(2);


    return (
        <div className='cart'>
            <h2>ORDER SUMMARY</h2>
            <h3>Selected Item : {quantity}</h3>
            <p>Total Price : ${total}</p>
            <p>Total Shipping Charge : ${shipping}</p>
            <p>Tax : ${tax}</p>
            <h4>Grand Total : {grandTotal}</h4>
        </div>
    );
};

export default Cart;