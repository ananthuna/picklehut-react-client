import { Box } from '@mui/material'
import React from 'react'
import List from './List/List'
import Address from './Address/Address'
import TotalPrice from './TotalPrice/TotalPrice'
import PlaceOrder from './PlaceOrder/PlaceOrder'

function CartItems() {
    return (
        <Box sx={{
            display: 'flex',
            bgcolor:'#F8F8F8'
        }}>
            <Box sx={{
                mt: '5.6rem',
                width: '60%'
            }}>
                <Address/>
                <List />
                <PlaceOrder/>
            </Box>
            <Box sx={{
                width: '40%'
            }}>
                <TotalPrice />
            </Box>
        </Box>
    )
}

export default CartItems