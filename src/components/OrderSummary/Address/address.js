import { Box, Typography } from '@mui/material'
import React from 'react'

function address({ name, number, address }) {
    return (
        <Box>
            <Box sx={{
                display: 'flex',
                gap: 3
            }}>
                <Typography>Delivery to:</Typography>
                <Typography>{name}</Typography>
                <Typography>{number}</Typography>
            </Box>
            <Box>
                <Typography>{address.address + ',' + address.city + ' '}<b>{'pin:' + address.pin}</b></Typography>
            </Box>
        </Box>
    )
}

export default address
