import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header-section'>
            <img src={logo} alt="" />
            <div>
                <a href="/Shop">Shop</a>
                <a href="/Orders">Orders</a>
                <a href="/Inventory">Inventory</a>
                <a href="/About us">About us</a>
            </div>
        </nav>
    );
};

export default Header;