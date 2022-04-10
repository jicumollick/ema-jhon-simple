import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {

    const {name,img,seller,price,ratings} = props.product;
    const {addToCart} = props;
    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className="product-info">
           <p className='product-name'>{name}</p>
            <p>price: ${price}</p>
            <p><small> Seller: {seller}</small></p>
            <p><small> Rating: {ratings}</small></p>
           </div>
           <button onClick={() => addToCart(props.product)} className='btn-cart'>
               <p className='btn-text'>Add To Cart</p>
               <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
           </button>
            
        </div>
    );
};

export default Product;<h2>I am product mama</h2>