import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from '../store/StateProvider'
const CheckoutProduct = ({ id, title, image, price, rating }) => {

    const [{ basket }, dispatch] = useStateValue()

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }
    return (
        <div className='checkoutProduct'>
            <img className="checkoutProduct_image" src={image} alt="" />

            <div className="checkoutProduct_info">
                <p className='checkoutProduct_title'>{title}</p>
                <p className='checkoutProduct_price'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <small class="checkoutProduct_gift">
                    <input type="checkbox" />This will be a gift.
                </small>

                <div className="checkoutProduct_additional_info">

                    <span>
                        <select name="" id="">
                            {Array(10).fill().map((_, i) => <option value={i + 1}>
                                {i == 0 ? "Qty:" : ""} {i + 1}</option>)}
                        </select>
                    </span>

                    <span>|</span>

                    <span>
                        <a onClick={removeFromBasket}>Delete</a>
                    </span>

                    <span>|</span>

                    <span>
                        <a>Save for later </a>
                    </span>

                    <span>|</span>

                    <span>
                        <a>See more like this </a>
                    </span>

                    <span>|</span>

                    <span>
                        <a>Share </a>
                    </span>
                </div>

            </div>
        </div>
    )
}

export default CheckoutProduct