import { Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function products({products}) {

   

    return (
        <Grid container spacing={2} sx={{
            ml: '1rem'
        }}>
            {products.map((item) =>
                <Grid item xs={6} md={2} sx={{ mr: '2rem' }}>
                    <Paper elevation={3} sx={{ml:'-2rem'}}>
                    <Box sx={{
                        width: '15rem',
                        height: '16rem',
                        position: 'relative'
                    }}>
                        <Box sx={{
                            width: '15rem',
                            height: '9rem',
                            position: 'absolute'
                        }}>
                           <img alt='' src={item.url} width='98%' height='100%'></img>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'relative',
                            pt: '9rem'
                        }}>
                            <Typography>{item.name}</Typography>
                            <Typography>{item.discription}</Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            mt: '2rem',
                            position: 'relative'
                        }}>
                            <Typography>watchlist</Typography>
                            <Typography>add to cart</Typography>
                        </Box>
                    </Box>
                    </Paper>
                </Grid>
            )}
        </Grid>
    )
}

export default products