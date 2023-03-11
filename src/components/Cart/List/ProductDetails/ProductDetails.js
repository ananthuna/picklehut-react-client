import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'

function ProductDetails({ item }) {

    return (
        <Box>
            <Box sx={{
                pt: '1rem',
                pl: '2rem'
            }}>
                <Typography sx={{ fontSize: '1.5rem', fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }}>{item.name}</Typography>
                <Box sx={{
                    display: 'flex',
                    gap: 1
                }}>
                    <Typography sx={{ fontSize: '1.5rem' }} ><b>{'₹' + item.price}</b></Typography>
                </Box>
                <Typography>Qty: {item.quantity}</Typography>
            </Box>
        </Box>
    )
}

export default ProductDetails