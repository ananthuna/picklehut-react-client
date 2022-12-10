import { Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function TotalPrice() {
  return (

    <Paper sx={{
      position: 'fixed',
      top: '6.7rem',
      width: '30rem',
    }}>
      <Typography sx={{ pl: '2rem', pt: '1rem' }}>PRICE DETAILS</Typography>
      <hr />
      <Box sx={{
        display:'flex',
        flexDirection:'column',
        gap:2
      }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', pl: '1rem', pr: '1rem' }}>
          <Typography>Price(2items)</Typography>
          <Typography>₹300</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', pl: '1rem', pr: '1rem' }}>
          <Typography>Discount</Typography>
          <Typography sx={{color:'green'}}>-₹17</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', pl: '1rem', pr: '1rem' }}>
          <Typography>Delivery Charges</Typography>
          <Typography>₹47</Typography>
        </Box>
      </Box>
      <hr />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', pl: '1rem', pr: '1rem' ,pb:'1rem'}}>
        <Typography><b>TOTAL AMOUNT</b></Typography>
        <Typography><b>₹339</b></Typography>
      </Box>
    </Paper>
  )
}

export default TotalPrice