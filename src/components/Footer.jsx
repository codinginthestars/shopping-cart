import './Footer.css';
import copyright from '../assets/icons/copyright.png';
import facebook from '../assets/icons/facebook.png';
import twitter from '../assets/icons/twitter.png';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div className="copyright">
                <img src={copyright} alt='copyright symbol'/>
                <p>2024 RoyalTy Demands</p>
            </div>
            <div className='footer-socials'>
                <Link><img src={facebook} /></Link>
                <Link><img src={twitter} /></Link>
            </div>
        </footer>
    )
};

export default Footer;