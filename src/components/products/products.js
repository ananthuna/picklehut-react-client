import { Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/Context'


function products({ products }) {
    const navigate = useNavigate()
    const { setDetails } = useContext(UserContext)

    const handleView = (item) => () => {
        console.log(item);
        if(item) setDetails(item)
        navigate('/view')
    }


    return (
        <Grid container spacing={2} sx={{ ml: '1rem' }}>
            {products.map((item) =>
                <Grid item xs={6} md={2} >
                    <Paper elevation={3} sx={{ ml: '-2rem', width: '100%', position: 'relative' }}>
                        <Box sx={{
                            width: '15rem',
                            height: '16rem',
                            position: 'relative',
                            mt: '2rem',
                            pt: '1rem',
                            pr: '3rem'
                        }} onClick={handleView(item)}>
                            <Box sx={{
                                width: '15rem',
                                height: '9rem',
                                position: 'absolute',
                                pl: '-0.1rem'
                            }}>
                                <img alt='' src={item.url} width='85%' height='100%'></img>
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
                                mt: '1rem',
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