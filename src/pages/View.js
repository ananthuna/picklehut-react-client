import { Box } from '@mui/system'
import React from 'react'
import Header from '../components/Header/header'
import Footer from '../components/Footer/footer'
import ViewProduct from '../components/View/view'


function View() {
    

    return (
        <Box>
            <Header />
            <ViewProduct/>
            <Footer/>
        </Box>
    )
}

export default View