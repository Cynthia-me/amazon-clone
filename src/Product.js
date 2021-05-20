import React from 'react'
import "./Product.css";
// import { useStateValue } from './StateProvider';

function Product({id,title,image,price,rating}) {
    // const [ dispatch] = useStateValue();

    // const addToBasket = () => {
       
    //     dispatch({
    //         type: 'ADD_TO_BASKET',
    //         item: {
    //             id: id,
    //             title: title,
    //             image: image,
    //             price: price,
    //             rating: rating
    //         }
        // })
    // }
    return (
        <div className = "product">
            <div className = "product__info">
                <p>{title}</p>
                <p className = "product__price">
                <small>$</small>
                <stron>{price}</stron></p>
                <div className = "product__rating">
                    {Array(rating).fill().map((_, i) => (<p>🌟 </p>))}
                </div>
                <img src = {image}alt = ""/>
                <button>Add to Basket</button>
            </div>
        </div>
    )
}

export default Product
