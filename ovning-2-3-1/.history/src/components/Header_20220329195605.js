import { Component } from 'react';
import './Header.css';

import Cart from 'Cart';

function Header() {
    return (
        <div className="headerContainer">
            <Cart />
        </div>
    );
}

export default Header;