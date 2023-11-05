import React from 'react'
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom'
import { useStateValue } from '../store/StateProvider';
import { auth } from '../firebase';
const Header = () => {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    console.log("in header", user)

    return (
        <div className='header'>
            <Link to="/">
                <img className="header_logo" src="amazon_logo.png" />
            </Link>
            <div className='header_search'>
                <input className="header_search_input" type="text" />
                <SearchIcon className='header_search_icon' />
            </div>

            <div className='header_nav'>

                <Link to={!user && '/login'}>
                    <div className='header_option' onClick={handleAuthentication}>
                        <span className='header_option_line_one'>
                            Hello, {user ? user.email : "Guest"}
                        </span>
                        <span className='header_option_line_two'>
                            {user ? 'Sign Out' : 'Sign In'}
                        </span>
                    </div>
                </Link>
                <div className='header_option'>
                    <span className='header_option_line_one'>
                        Returns
                    </span>
                    <span className='header_option_line_two'>
                        & Orders
                    </span>
                </div>

                <div className='header_option'>
                    <span className='header_option_line_one'>
                        Your
                    </span>
                    <span className='header_option_line_two'>
                        Prime
                    </span>
                </div>

                <Link to="/checkout">
                    <div className='header_option_basket'>
                        <ShoppingCartOutlinedIcon />
                        <span className='header_option_line_two header_basket_count'>{basket?.length}</span>
                        <span className='header_option_line_two'>Cart</span>
                    </div>
                </Link>


            </div>

        </div>
    )
}

export default Header