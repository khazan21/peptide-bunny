// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductItem from './ProductItem';
import ProductModal from './ProductModal';

const ProductList = ({ addToCart }) => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:5000/api/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching products', error);
            });
    }, []);

    const openModal = (product) => {
        setSelectedProduct(product);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedProduct(null);
        setModalIsOpen(false);
    };

    return (
        <div className="container">
            <div className="row">
                {products.map(product => (
                    <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                        <ProductItem product={product} openModal={openModal} />
                    </div>
                ))}
            </div>
            <ProductModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                product={selectedProduct}
                addToCart={addToCart}
            />
        </div>
    );
};

export default ProductList;
