import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product
    return (
        <div className='product-container'>
            <img src={img} alt="" />
            <div className="product-info">
                <h2 className='product-name'>{name}</h2>
                <h3 className='product-price'>Price: ${price}</h3>
                <p><small>Seller: {seller}</small></p>
                <p><small>Rating: {ratings}</small></p>
            </div>
            <button onClick={() => props.handleaddcart(props.product)} className='add-cart'>Add to Cart <span><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></span></button>
        </div>
    );
};

export default Product;