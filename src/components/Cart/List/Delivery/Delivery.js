import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import Button from '@mui/material/Button';
import React from 'react'

function Delivery() {
    return (
        <Box>
            <Box sx={{
                display: 'flex',
                right: '1rem',
            }}>
                <Typography>Delivery by Mon Dec 5 |</Typography>
                <Typography sx={{ color: 'green' }}>Free</Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                mt: '3rem',
            }}>
                <Button variant="text">Add to wishlist</Button>
                <Button variant="text">REMOVE</Button>
            </Box>
        </Box>
    )
}

export default Delivery