import * as React from 'react';
import Logo from './logo/logo';
import Cart from './cartIcon/cartIcon';
import Account from './accountIcon/accountIcon';
import SearchBar from './SearchBar/SearchBar'
import './header.css';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';


export default function PrimarySearchAppBar() {
    


    return (
        <Box className='header' sx={{borderBottom: 1}}>
            <Box sx={{
                position: 'relative',
                width: '12rem',
                height: '4rem',
                display: { xs: 'none', sm: 'block' }
            }}>
                <Logo />
            </Box>
            <Box>
                <SearchBar/>
            </Box>
            <Box className='right-items'>
                <IconButton>
                    <Cart />
                </IconButton>
                <IconButton>
                    <Account />
                </IconButton>
            </Box>
        </Box>
    );
}

