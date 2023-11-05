import React from 'react'
import "./Subtotal.css"
import { useStateValue } from '../store/StateProvider'
import { getBasketTotal } from '../store/reducer'
const Subtotal = () => {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className='subtotal'>

            <>
                <p>
                    Subtotal ({basket?.length} items):
                    <strong>{getBasketTotal(basket)}</strong>
                </p>
                <small className='subtotal_gift'>
                    <input type="checkbox" />This order contains a gift.
                </small>
            </>
            <button>Proceed to buy</button>
        </div>
    )
}

export default Subtotal