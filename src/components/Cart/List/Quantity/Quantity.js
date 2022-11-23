import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function Quantity() {
    return (
        <Box sx={{
            display: 'flex',
            gap:1,
            justifyContent:'center'
        }}>
            <Box sx={{
                border: 1,
                borderRadius: '50%'
            }}>
                <AddIcon />
            </Box>
            <Box sx={{
                border:1,
                borderRadius:1,
                width:'2rem'
            }}>
            <Typography align='center'>1</Typography>
            </Box>
            <Box sx={{
                border: 1,
                borderRadius: '50%'
            }}>
                <RemoveIcon />
            </Box>
        </Box>
    )
}

export default Quantity