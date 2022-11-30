import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function Coupon() {
    return (
        <Box sx={{

            bgcolor: 'white',
            p: '2rem',
            borderRadius: '1rem',
            boxShadow: "1px 1px 6px 0px grey"
        }}>
            <Typography><b>Available Coupons</b></Typography>
            <Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    border: 1,
                    borderColor: 'lightgrey',
                    width: '55rem',
                    pl: '1rem',
                    pr: '1rem',
                    pt: '1rem',
                    pb: '1rem'
                }}>

                    <Box>
                        <Typography sx={{ fontWeight: 'bold', color: 'green',lineHeight: 2 }}>Extra 5% Off select product</Typography>
                        <Typography sx={{ lineHeight: 2 }}>Get extra 5% off on 1 item(s)(price inclusive cashback/coupon)</Typography>
                    </Box>
                    <Box>
                        <Typography sx={{fontWeight:'bold',color:'grey',lineHeight:2}}>Valid till 30 Nov,2022</Typography>
                        <Typography sx={{lineHeight:2,'&:hover':{color:'blue'}}}>View T&C</Typography>
                    </Box>

                </Box>



            </Box>
        </Box>
    )
}

export default Coupon