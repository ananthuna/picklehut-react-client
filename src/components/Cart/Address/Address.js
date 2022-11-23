import { Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Button from '@mui/material/Button';
import './Address.css'

function Address() {
    return (
        <Paper sx={{
            display: 'flex',
            justifyContent: 'space-between',
            m: '1rem',
        }}>

            <Box sx={{ p: '1rem' }}>
                <Typography>
                    Delivery to: Ananthu N A,689595
                    <Button sx={{ width: '2rem', height: '1rem', ml: '0.5rem' }} variant="contained" disabled>
                        Home
                    </Button>
                </Typography>
                <Typography>Vishnupresadham,mampuzhakary,ramankary po,allapuzha,kerala</Typography>
            </Box>
            <Button variant="outlined" sx={{
                width: '5.5rem',
                height: '2rem',
                m: '2rem',
            }}>
                change
            </Button>

        </Paper>
    )
}

export default Address