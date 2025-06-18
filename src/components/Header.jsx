import React from 'react';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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
                <input type="text" placeholder='search' />
            </div>
            <div className='right'>
                <div className='signin'>
                    Signin/Signout
                </div>
                <div className='cart'>
                    Cart
                </div>
            </div>

        </div>
    );
}
export default Header;