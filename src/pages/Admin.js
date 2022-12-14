import React from 'react'
import Header from '../components/Header/header'
import Footer from '../components/Footer/footer'
import Adminpage from '../components/Adminpage/Adminpage'
import { Box } from '@mui/material'

function Admin() {
    return (
        <Box>
            <Header />
            <Adminpage />
            <Footer />
        </Box>
    )
}

export default Admin
