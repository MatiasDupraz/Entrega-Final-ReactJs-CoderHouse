import React, { useContext } from 'react';
import emptyCart from './assets/img/cart3.svg';
import {Link} from 'react-router-dom'
import { CartContext } from '../context/CartContext';
const Cart = (svg) => {
    return (
        <img src={svg.img} alt="cart" className='w-7 h-7'/>
    )
}

const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext)
    let cantProductos = totalQuantity;
    return (
        <div style={{display: totalQuantity !== '0' ? 'block' : 'none'}}>
        <Link to='/cart'>
            <Cart img={emptyCart}/>
            <p className='text-2xl text-gray-50'>{cantProductos}</p>
        </Link>
        </div>
    )
}
export default CartWidget;