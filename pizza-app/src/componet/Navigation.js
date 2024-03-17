import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../CartContext';


const Navigation = () => {
    const cartstyle = {
        background: '#F59E0D',
        display: 'flex',
        padding: '3px 6px',
        borderRadius: '50px'

    }
    const { cart } = useContext(CartContext);

    return (
        <>
            <nav className='container mx-auto flex items-center justify-between py-4 '>

                <Link to="/">
                    <img style={{ height: 45 }} src='/images/logo.png' alt='logo' />
                </Link>
                <ul className='flex items-center'>
                    <li><Link to='/'>Home</Link></li>
                    <li className='ml-6'><Link to='/products'>Products</Link></li>
                    <li className='ml-6'>
                        <Link to='/cart'>
                            <div style={cartstyle}>
                                <span>{cart.totalItems ? cart.totalItems : 0}</span>
                                <img className='ml-2 ' src='./images/cart.png' alt='cart' />
                            </div>
                        </Link>
                    </li>

                </ul>
            </nav>
        </>
    )
}

export default Navigation;
