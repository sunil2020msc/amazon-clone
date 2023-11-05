import React from 'react'
import "./Product.css"
import { useStateValue } from '../store/StateProvider'

const Product = ({ id, title, image, price, rating = 1 }) => {

    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: { id, title, image, price, rating }

        })
    }

    return (
        <div className='product'>

            <img src={image} />

            <div className="product_info">
                <p>{title}</p>
                <p className='product_price'>
                    <small>&#8377;</small>
                    <strong>{price}</strong>
                </p>

                <div className="product_rating">
                    {Array(parseInt(rating)).fill().map((_, i) => (
                        <p key={i}>⭐</p>
                    ))}
                </div>
            </div>

            <button type="button" onClick={addToBasket}>Add to Cart</button>

        </div>
    )
}

export default Product