import { Avatar, Badge, createTheme, Menu, Typography, MenuItem } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import EditIcon from '@mui/icons-material/Edit';
import PersonIcon from '@mui/icons-material/Person';
import UploadAndDisplayImage from './UploadAndSelectimage';
import MailIcon from '@mui/icons-material/Mail';
import EditName from './NameEditPage';
import { UserContext } from '../Context/Context';
import { useContext } from 'react';
import { baseUrl } from '../url';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { red } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default function BasicMenu({ user }) {
  const { nameEdit, setNameEdit } = useContext(UserContext)
  const { imageURL } = useContext(UserContext)
  const { profilePhoto, setProfilePhoto } = useContext(UserContext);
  const navigate = useNavigate()


  const handleDelete = () => {
    if(window.confirm("Delete your account.")){
      axios.get(`${baseUrl}/delete`, { withCredentials: true }).then((response) => {
        if (response.data.deleteGranted) {
            navigate('/')
        }
    })
    }
    
  }


  return (
    <>
      <Box sx={{
        width: '500px',
        mb: '1rem'

      }}>
        {/* sx={{ ml: '35%', mt: '1.5rem', width: '10rem', height: '10rem' }} */}
        <Typography textAlign="center">Profile page</Typography>
        <Badge
          width="100%"
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          badgeContent={<Avatar onClick={e => setProfilePhoto(true)} sx={{ ml: '20rem', width: '4rem', height: '4rem', bgcolor: 'blue' }}><CameraAltIcon /></Avatar>} >
          <Avatar sx={{ ml: '100%', mt: '1.5rem', width: '10rem', height: '10rem' }} src={baseUrl + '/' + imageURL} />
        </Badge>


        {/* user Name */}
        <Box sx={{ display: 'flex', m: '10%' }}>
          <PersonIcon pt={1} color="disabled" />
          <Box sx={{ pl: '3%' }}>
            <Typography variant="subtitle2" color="lightgrey">Name</Typography>
            <Box display="flex" gap="18rem">
              <Typography>{user}</Typography>
              <EditIcon onClick={e => setNameEdit(true)} pl="2rem" color="primary" />
            </Box>
            <Typography variant="subtitle2" color="lightgrey">This is not your username or pin. This name will be visible to your WhatsApp contacts.</Typography>
          </Box>
        </Box>

        {/* user enail id */}
        <Box sx={{ display: 'flex', ml: '10%', mt: '-5%' }}>
          <MailIcon pt={1} color="disabled" />
          <Box sx={{ pl: '3%' }}>
            <Typography variant="subtitle2" color="lightgrey">Email</Typography>
            <Box display="flex" gap="12.2rem">
              <Typography>ananthu@gmail.com</Typography>

            </Box>
            <Typography variant="subtitle2" color="lightgrey">This is your username and it will not be visilble to the users</Typography>
          </Box>
        </Box>

        {/* Delete account */}
        <Box sx={{ display: 'flex', ml: '15%', mt: '3%' }}>
          <Box sx={{ pl: '3%' }}>
            <Box display="flex" gap="14rem">
              <Typography color="red">Delete account </Typography>
              <DeleteForeverIcon onClick={handleDelete} sx={{ color: red[500] }} />
            </Box>
            <Typography variant="subtitle2" color="lightgrey">This is your username and it will not be visilble to the users</Typography>
          </Box>
        </Box>


        {/* profile photo edit */}
        <Menu
          sx={{
            mt: '45px',
            [theme.breakpoints.up('sm')]: {
              ml: "-66%",
              mt: "10%"
            },

            [theme.breakpoints.down('sm')]: {
              ml: "-12%",
              mt: "30%"
            },
          }}
          id="menu-appbar"
          anchorOrigin={{
            vertical: 'top',
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={profilePhoto}
          onClose={e => setProfilePhoto(false)}
        >
          <MenuItem display='flex'>
            <UploadAndDisplayImage />
          </MenuItem>
        </Menu>



        {/* name edit */}

        <Menu
          sx={{
            mt: '45px',
            [theme.breakpoints.up('sm')]: {
              ml: "-66%",
              mt: "10%"
            },

            [theme.breakpoints.down('sm')]: {
              ml: "-12%",
              mt: "30%"
            },
          }}
          id="menu-appbar"
          anchorOrigin={{
            vertical: 'top',
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={nameEdit}
          onClose={e => setNameEdit(false)}
        >
          <MenuItem display='flex'>
            <EditName />
          </MenuItem>
        </Menu>
      </Box>


    </>
  );
}
