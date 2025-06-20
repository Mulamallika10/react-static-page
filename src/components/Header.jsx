import React from 'react';
import SignIn from './SignIn';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
        <div className='Navbar'>
            <div className='left'>

                <div className='title'>
                    <h2>Shopping Website</h2>
                </div>
            </div>

            <div className='center'>
                <ul>
                    <li>Women</li>
                    <li>Men</li>
                    <li>Children</li>
                    <li>Beauty</li>
                </ul>
            </div>
            <div className='search'>
                <input type="text" placeholder='search'/>
                <FontAwesomeIcon icon={faSearch} className='search-icon'/>
            </div>
            <div className='right'>
                <div className='signin'>Signin
                </div>
                <div className='cart'>
                    Cart
                </div>
            </div>

        </div>
    );
}
export default Header;
