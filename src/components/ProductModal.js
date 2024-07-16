import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ProductModal = ({ isOpen, onRequestClose, product, addToCart }) => {
    if (!product) return null;

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Product Details"
            style={{
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                },
            }}
        >
            <div>
                <img src={`https://via.placeholder.com/150`} alt={product.name} />
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <button onClick={() => { addToCart(product); onRequestClose(); }}>Add to Cart</button>
                <button onClick={onRequestClose}>Close</button>
            </div>
        </Modal>
    );
};

export default ProductModal;