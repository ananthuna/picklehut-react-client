import { Box } from '@mui/material'
import React from 'react'
import List from './List/List'
import Address from './Address/Address'
import TotalPrice from './TotalPrice/TotalPrice'

function CartItems() {
    return (
        <Box sx={{
            display: 'flex',
        }}>
            <Box sx={{
                mt:'5.6rem',
                width: '60%',
            }}>
                <Address />
                <List />
            </Box>
            <Box sx={{
                width:'40%'
            }}>
                <TotalPrice />
            </Box>
        </Box>
    )
}

export default CartItems