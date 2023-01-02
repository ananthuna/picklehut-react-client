import { Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import './Address.css'
import Changebtn from './ChangeAddress/ChangeAddressbtn'

function Address({ address, name, number }) {

    return (
        <Paper sx={{
            display: 'flex',
            justifyContent: 'space-between',
            m: '1rem',
        }}>


            <Box sx={{
                width: '60rem',
                height: '5rem',
                pl: '2rem',
                pr: '2rem',
                pt:'1rem'

            }}
                key={address._id}>
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

            </Box>
            <Changebtn />

        </Paper>
    )
}

export default Address