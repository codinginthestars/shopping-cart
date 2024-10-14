import './Navbar.css';
import cart_outline from '../assets/cart-outline.png';
import cart from '../assets/cart.png';
import king from '../assets/chess-king.png';
import queen from '../assets/chess-queen.png';
import sun from '../assets/weather-sunny.png';
import moon from '../assets/moon-waxing-crescent.png';
import { useState } from 'react';

function Navbar() {

    const [theme, setTheme] = useState("light");


    return (
        <div className="navbar">
            <div className='navbar-left'>
                <img src={king} alt='king crown' />
                <h2>RoyalTy Demands</h2>
                <img src={queen} alt='queen crown' />
            </div>
            <div className='navbar-middle'>
                <ul>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className='navbar-right'>
                { theme === "light" ? <img src={sun} alt='sun for the light theme' onClick={() => {setTheme("dark")}} /> : <img src={moon} alt='moon for the dark theme' onClick={() => {setTheme("light")}} />}
                { theme === "light" ? <img src={cart} alt='' /> : <img src={cart_outline} alt='' />}
            </div>
        </div>
    )
};

export default Navbar;