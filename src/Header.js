import React from 'react'
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
function Header() {
    const [{basket}] = useStateValue();

    return (
        <div className = "header">
            <Link to = "/">
            <img className = "header__logo" src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt = "amazonLogo"></img> 
            </Link>
        
            <div className = "header__search">
                <input className = "header__searchIn" type = "text"></input>
                <SearchIcon className = "header__SearchIcon "></SearchIcon>
            </div>

            <div className = "header__nav">
                <div className = "header__option">
                    <span className = "option1">
                        Hello,
                    </span>
                    <span className = "option2">
                         Sign In
                    </span>
                </div>
                <div className = "header__option">
                <span className = "option1">
                        Returns 
                    </span>
                    <span className = "option2">
                    & orders
                    </span>
                </div>
                <div className = "header__option">
                <span className = "option1">
                    Your
                    </span>
                    <span className = "option2">
                   Prime
                    </span>
                </div>
                <Link to = '/checkout'>
                <div className = "header__basket">
                    <ShoppingBasketIcon/>
                    <span className = "option2 header__basketCount">{basket?.length}</span>
                </div>
                </Link>
                
            </div>
        </div>
    )
}

export default Header
