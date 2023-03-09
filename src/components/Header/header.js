import * as React from 'react';
import Logo from './logo/logo';
import Cart from './cartIcon/cartIcon';
import Account from './accountIcon/accountIcon';
import SearchBar from './SearchBar/SearchBar'
import './header.css';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Adminicon from './adminicon/AdminIcon';
import { UserContext } from '../../Context/Context';


export default function PrimarySearchAppBar() {
    const { user, setUser } = React.useContext(UserContext)
    const navigate = useNavigate()
    React.useEffect(() => {
        let User = localStorage.getItem("user");
        setUser(JSON.parse(User))

    }, [])



    return (
        <Box className='header'>
            <Box sx={{
                position: 'relative',
                width: '12rem',
                height: '4rem',
                display: { xs: 'none', sm: 'block' }
            }}>
                <Logo />
            </Box>
            <Box>
                <SearchBar />
            </Box>
            <Box >
                {user ? (
                    <Box className='right-items'>
                        {user.isAdmin ? (
                            <Box>
                                <IconButton>
                                    <Adminicon />
                                </IconButton>
                            </Box>
                        ) : (
                            <Box sx={{
                                display: 'flex',
                                gap:'10px'
                            }}>
                                {/* <IconButton> */}
                                <Cart />
                                {/* </IconButton> */}
                                {/* <IconButton> */}
                                <Account />
                                {/* </IconButton> */}
                            </Box>
                        )}
                    </Box>

                ) : (
                    <Box className='right-items'>
                        <Typography className='selection' onClick={() => navigate('/login')}>Login</Typography>
                        <Typography>/</Typography>
                        <Typography className='selection' onClick={() => navigate('/signup')}>Signup</Typography>
                    </Box>
                )
                }
            </Box >
        </Box >
    );
}

