// src/components/ProductItem.js
import React from 'react';

const ProductItem = ({ product, openModal }) => {
    return (
        <div className="card" onClick={() => openModal(product)}>
            <img src={`https://via.placeholder.com/150`} className="card-img-top" alt={product.name} />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price}</p>
            </div>
        </div>
    );
};

export default ProductItem;
