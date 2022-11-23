import * as React from 'react';
import Logo from './logo/logo';
import Cart from './cartIcon/cartIcon';
import Account from './accountIcon/accountIcon';
import MenuList from './Menu/menu'
import './header.css';
import Box from '@mui/material/Box';
import { Button, Menu, MenuItem } from '@mui/material';
import IconButton from '@mui/material/IconButton';


export default function PrimarySearchAppBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


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
                <Box sx={{ display: { xs: 'none', sm: 'none', lg: 'block' } }}>
                    <MenuList />
                </Box>
                <Box sx={{ display: { sm: 'block', lg: 'none' },width:'100%' }}>

                    <Button
                        id="demo-positioned-button"
                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <img alt='btn' className='btn' src={process.env.PUBLIC_URL + '/menu.svg'}></img>
                    </Button>

                    <Menu
                        id="demo-positioned-menu"
                        aria-labelledby="demo-positioned-button"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        sx={{width:'100%',position:'absalute'}}
                    >
                        <MenuItem onClick={handleClose}>HOME</MenuItem>
                        <MenuItem onClick={handleClose}>SHOPE</MenuItem>
                        <MenuItem onClick={handleClose}>PAGE</MenuItem>
                        <MenuItem onClick={handleClose}>ABOUT</MenuItem>
                        <MenuItem onClick={handleClose}>CONTACT</MenuItem>
                    </Menu>
                </Box>
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

