import { Box, Typography } from '@mui/material'
import React from 'react'
import RoofingIcon from '@mui/icons-material/Roofing';

function IconHeader() {
    return (

        <Box sx={{ mt: '1rem', ml: '2rem', display: "flex", gap: 1 }}>
            <RoofingIcon />
            <Typography>PICKLEHUT</Typography>
        </Box>
    )
}

export default IconHeader
