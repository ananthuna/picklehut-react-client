import { Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function TotalPrice({ bill,items }) {
  return (

    <Paper sx={{
      position: 'fixed',
      top: '6.7rem',
      width: '30rem',
    }}>
      <Typography sx={{ pl: '2rem', pt: '1rem' }}>PRICE DETAILS</Typography>
      <hr />
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', pl: '1rem', pr: '1rem' }}>
          <Typography>Price({items? items.length: 0}items)</Typography>
          <Typography>₹{bill}</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', pl: '1rem', pr: '1rem' }}>
          <Typography>Discount</Typography>
          <Typography sx={{ color: 'green' }}>-₹0</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', pl: '1rem', pr: '1rem' }}>
          <Typography>Delivery Charges</Typography>
          <Typography>₹40</Typography>
        </Box>
      </Box>
      <hr />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', pl: '1rem', pr: '1rem', pb: '1rem' }}>
        <Typography><b>TOTAL AMOUNT</b></Typography>
        <Typography><b>₹{bill? (40+bill) : (0)}</b></Typography>
      </Box>
    </Paper>
  )
}

export default TotalPrice