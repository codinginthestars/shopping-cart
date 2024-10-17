import './Hero.css';
import useProducts from '../hooks/Products';
import { Link } from 'react-router-dom';

function Hero() {

    const frontItem = useProducts('https://fakestoreapi.com/products/1');
    console.log(frontItem);


    return (
        <div className="hero">
            <div className='left-side'>
                <div className='hero-caption'>
                    <h1>Ready for the luxury life?</h1>
                </div>
                <div className='link'>
                    <Link to='/shop' className='page-link'>Shop</Link>
                </div>
            </div>
            <div className='right-side'>
                <img src={frontItem.image} />
            </div>
        </div>
    )
};

export default Hero;