import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className = "home">
            <div className = "home__container">
                <img className = "home__img" src = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" alt = ""></img>

                <div className = "home__row">
                    <Product id = "1" title = "The lean startup" price = {29.99} image = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg" rating = {5}/>
                    <Product id = "2" title = "The lean startup" price = {29.99} image = "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating = {5}/>
                </div>

                <div className = "home__row">
                <Product id = "3" title = "The lean startup" price = {29.99} image = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg" rating = {5}/>
                <Product id = "4" title = "The lean startup" price = {29.99} image = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg" rating = {5}/>
                <Product id = "5" title = "The lean startup" price = {29.99} image = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg" rating = {5}/>
                </div>

                <div className = "home__row">
                <Product id = "6" title = "Samasung dhdsjdhsd dsjdhsjdhsjd djsdhsjdhsjdhs dhsdjsh" price = {456.9} image = "https://images.unsplash.com/flagged/photo-1572609239482-d3a83f976aa0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlbGV2aXNpb258ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" rating = {5}/>
                </div>
            </div>
            
        </div>
    )
}

export default Home
