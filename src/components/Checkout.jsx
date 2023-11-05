import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from '../store/StateProvider'
import FlipMove from 'react-flip-move';
const Checkout = () => {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className='checkout'>
            <div className="checkout_left">
                <img className="checkout_ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/CEPC/Jupiter/23/Eelctronics/Page/Festive/Delights/Revised/Latest-launches-this-festive-season_1500X1291.gif" alt="" />

                <div>
                    <h2 className='checkout_title'>Shopping Cart</h2>
                    {/* <FlipMove> */}
                    {basket.map(item => <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />)}
                    {/* </FlipMove> */}
                </div>

            </div>

            <div className="checkout_right">
                <Subtotal />
            </div>

        </div>
    )
}

export default Checkout