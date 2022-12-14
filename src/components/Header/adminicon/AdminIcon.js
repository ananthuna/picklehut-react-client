import { Box, IconButton } from '@mui/material';
import React, { useContext } from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { styled, alpha } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import { useNavigate } from 'react-router-dom'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { UserContext } from '../../../Context/Context';


const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));

function accountIcon() {
    const { setValue } = useContext(UserContext)
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = () => {
        localStorage.removeItem("user");
        handleClose()
        navigate('/')
        window.location.reload()
    }
    return (
        <Box>
            <Box>
                <IconButton
                    id="demo-customized-button"
                    aria-controls={open ? 'demo-customized-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    variant="contained"
                    onClick={handleClick}
                >
                    <PermIdentityIcon sx={{ fontSize: 30 }} />
                </IconButton>
            </Box>

            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                disableScrollLock={true}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={() => {
                    navigate('/admin')
                    setValue(0)
                    handleClose()
                }} disableRipple>
                    <PersonIcon />
                    Products
                </MenuItem>
                <MenuItem onClick={() => {
                    navigate('/account')
                    setValue(2)
                    handleClose()
                }} disableRipple>
                    <LocalShippingIcon />
                    Orders
                </MenuItem>
                <MenuItem onClick={() => {
                    navigate('/account')
                    setValue(3)
                    handleClose()
                }} disableRipple>
                    <FavoriteIcon />
                    Coupons
                </MenuItem>
                <MenuItem onClick={() => {
                    navigate('/account')
                    setValue(4)
                    handleClose()
                }} disableRipple>
                    <ConfirmationNumberIcon />
                    Settings
                </MenuItem>
                <MenuItem onClick={handleLogout} disableRipple>
                    <PowerSettingsNewIcon />
                    Logout
                </MenuItem>
            </StyledMenu>
        </Box>
    )
}

export default accountIcon