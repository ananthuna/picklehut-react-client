import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function Delivery() {
    return (
        <Box sx={{
            display: 'flex',
            right: '1rem',
        }}>
            <Typography>Delivery by Mon Dec 5 |</Typography>
            <Typography sx={{color:'green'}}>Free</Typography>
        </Box>
    )
}

export default Delivery