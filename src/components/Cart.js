// src/components/Cart.js
import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
    return (
        <div className="container">
            <h2>Cart Items</h2>
            {cartItems.length === 0 ? (
                <p>No items in cart.</p>
            ) : (
                cartItems.map((item, index) => (
                    <div key={index} className="card mb-3">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={`https://via.placeholder.com/150`} className="card-img" alt={item.name} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">${item.price}</p>
                                    <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;
