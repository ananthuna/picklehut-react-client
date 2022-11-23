import { Box } from '@mui/system'
import React from 'react'
import CartItems from '../components/Cart/CartItems'
import Header from '../components/Header/header'
import Footer from '../components/Footer/footer'

function Cart() {
    return (
        <Box>
            <Header />
            <CartItems />
            <Footer />
        </Box>
    )
}

export default Cart