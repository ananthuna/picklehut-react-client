import { Paper } from '@mui/material'
import Button from '@mui/material/Button';
import React from 'react'

function PlaceOrder() {
    return (
        <Paper sx={{
            position: 'relative',
            display: 'flex',
            justifyContent:'end',
            m:'1rem'
        }}>
            <Button variant="contained" sx={{ 
                bgcolor: '#ef6c00', 
                "&:hover": { backgroundColor: "#ef6c00"},
                m:'1.5rem'
                 }} >Place Order</Button>
        </Paper>
    )
}

export default PlaceOrder