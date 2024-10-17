import './Navbar.css';
import cart_outline from '../assets/icons/cart-outline.png';
import cart from '../assets/icons/cart.png';
import king from '../assets/icons/chess-king.png';
import queen from '../assets/icons/chess-queen.png';
import sun from '../assets/icons/weather-sunny.png';
import moon from '../assets/icons/moon-waxing-crescent.png';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {

    const [theme, setTheme] = useState("light");

    function handleClick() {
        const navbar = document.querySelector(".navbar");

        if (theme === "light") {
            setTheme("dark");
            navbar.classList.remove("navbar-light");
            navbar.classList.add("navbar-dark");
        } else if (theme === "dark") {
            setTheme("light");
            navbar.classList.remove("navbar-dark");
            navbar.classList.add("navbar-light");
        }
    }


    return (
        <nav className="navbar">
            <div className='navbar-left'>
                <img src={king} alt='king crown' />
                <h2>RoyalTy Demands</h2>
                <img src={queen} alt='queen crown' />
            </div>
            <div className='navbar-middle'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/shop'>Shop</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </div>
            <div className='navbar-right'>
                { theme === "light" ? <img src={sun} alt='sun for the light theme' onClick={handleClick} /> : <img src={moon} alt='moon for the dark theme' onClick={handleClick} />}
                <Link to='/cart' className='page-links'>{ theme === "light" ? <img src={cart} alt='' /> : <img src={cart_outline} alt='' />}</Link>
            </div>
        </nav>
    )
};

export default Navbar;