import React, { useEffect, useState } from 'react'
import "./cart.css";
import {Scrollbars} from "react-custom-scrollbars-2";
import NavBar from '../navbar/NavBar';

import Items from './Items';

const Cart = ({ size, cart}) => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        setItem(cart)
    }, [cart])

    const removeFromCart = (id) => {
        setItem(item.filter(cartItem => cartItem.serialNumber !== id))
    }

    
    
  return (
    <>
        <NavBar size={size}/>
        <section className="main-cart-section">
            <h1>Shopping Cart</h1>
            <p className='totla-items'>you have <span className="total-items-count">{size}</span> items in shopping cart</p>

            <div className="cart-items">
                <div className="cart-items-container">
                    <Scrollbars>
                        {
                            item.map((curItem) => {
                                return <Items key={curItem.serialNumber} {...curItem}
                                removeFromCart={removeFromCart}
                                />
                            })
                        }
                        
                    </Scrollbars>
                </div>
            </div>

            <div className="card-total">
                <h3>Cart Total : 
                    <span>$
                    {
                        item.map(item => item.price).reduce((total, value) => total + value, 0)
                    }
                    </span></h3>
            </div>
        </section>
    </>
  )
}

export default Cart
