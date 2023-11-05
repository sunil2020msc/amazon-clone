import React from 'react'
import "./Home.css"
import Product from './Product'
const Home = () => {
    return (
        <div className='home'>

            <div className='home_container'>

                <img className="home_image" src="banner2.jpg" alt="" />


                <div className='home_row'>
                    <Product
                        id={1}
                        title="boAt BassHeads 100 in-Ear Wired Headphones with Mic (Black)"
                        price="325"
                        image="https://m.media-amazon.com/images/I/719elVA3FvL._AC_UL480_QL65_.jpg"
                        rating="4"

                    />
                    <Product
                        id={2}
                        title="OnePlus Nord Buds 2r True Wireless in Ear Earbuds with Mic, 12.4mm Drivers, Playback:Upto 38hr case,4-Mic Design, IP55 Rating [Deep Grey]"
                        price="1799"
                        image="https://m.media-amazon.com/images/I/51oMWaW7tKL._AC_UL480_QL65_.jpg"
                        rating='4'
                    />
                </div>

                <div className='home_row'>
                    <Product
                        id={3}
                        title="Apple iPhone 13 (128GB) - Midnight"
                        price="50499"
                        image="https://m.media-amazon.com/images/I/61VuVU94RnL._AC_UL480_QL65_.jpg"
                        rating="5"
                    />
                    <Product
                        id={4}
                        title="realme narzo 60X 5G（Nebula Purple 6GB,128GB Storage ） Up to 2TB External Memory | 50 MP AI Primary Camera | Segments only 33W"

                        price="12999"
                        image="https://m.media-amazon.com/images/I/818UhQ1kpdL._AC_UL480_QL65_.jpg"
                        rating="4"

                    />
                    <Product
                        id={5}
                        title="OnePlus Nord CE 3 Lite 5G (Chromatic Gray, 8GB RAM, 128GB Storage)"
                        price="19,999"
                        image="https://m.media-amazon.com/images/I/61LB+d0vheL._AC_UL480_FMwebp_QL65_.jpg"
                        rating="4"
                    />
                </div>

                <div className='home_row'>
                    <Product
                        id={6}
                        title="Sony Bravia 139 cm (55 inches) 4K Ultra HD Smart LED Google TV KD-55X74K (Black)"
                        price="52990"
                        image="https://m.media-amazon.com/images/I/81qx8YtutXL._AC_UY327_FMwebp_QL65_.jpg"
                        rating="5"
                    />
                </div>

            </div>
        </div>
    )
}

export default Home