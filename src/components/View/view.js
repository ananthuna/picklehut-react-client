import { Box, Paper, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../Context/Context'


function view() {

    const { details } = useContext(UserContext)
    const [product, setProduct] = useState({})

    useEffect(() => {
        if (details) window.localStorage.setItem("myObject", JSON.stringify(details));

        let item = window.localStorage.getItem("myObject");
        setProduct(JSON.parse(item))
    }, [])


    return (
        <Box sx={{
            position: 'relative',
            width: '100%',
            height: '30rem',
            display: 'flex',
            top: '6rem',
            mb: '1rem'
        }}>

            <Box sx={{
                width: '50%',
                height: '87%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'

            }}>
                <Paper elevation={2} sx={{
                    width: '35rem',
                    height: '20rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <img src={product.url} alt='img' width={350} height={300}></img>
                </Paper>
            </Box>
            <Box sx={{
                width: '50%',
                height: '87%',
                pt: '4rem'
            }}>
                <Typography sx={{ pl: '8rem' }}>Product Details</Typography>
                <Box sx={{
                    pt:'1rem',
                    pl:'2rem'
                }}>
                    <Typography>{product.name}</Typography>
                    
                </Box>
            </Box>

        </Box>
    )
}

export default view