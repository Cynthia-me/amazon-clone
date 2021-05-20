import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'
function Checkout() {
    return (
        <div className = "checkout">
           <div className = "checkout__left">
               <img className = "checkout__ad" src = "https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFja2dyb3VuZHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt = ""/>
               <div className = "checkout__title">
                   <h2>Your shopping basket</h2>
               </div>
            </div> 
            <div className = "checkout__right">
                <Subtotal/>
            </div> 
        </div>
    )
}

export default Checkout
