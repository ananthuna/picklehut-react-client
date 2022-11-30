import { Box } from '@mui/system'
import React from 'react'
import Profile from '../components/Profile/Profile'
import Header from '../components/Header/header'
import Footer from '../components/Footer/footer'


function Account() {
    return (
        <Box>
            <Header/>
            <Profile />
            <Footer/>
        </Box>
    )
}

export default Account
