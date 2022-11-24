import { Box } from '@mui/system'
import React from 'react'
import OrderSummary from '../components/OrderSummary/OrderSummary'
import Header from '../components/Header/header'
import Footer from '../components/Footer/footer'

function Order() {
  return (
    <Box>
        <Header/>
        <OrderSummary/>
        <Footer/>
    </Box>
  )
}

export default Order
