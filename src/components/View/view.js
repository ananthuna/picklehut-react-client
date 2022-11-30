import { Box, Paper, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import { UserContext } from '../../Context/Context'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom'
import LocalMallIcon from '@mui/icons-material/LocalMall';




function view() {
    const navigate = useNavigate()
    const { details } = useContext(UserContext)
    const [product, setProduct] = useState({})

    useEffect(() => {
        if (details) localStorage.setItem("myObject", JSON.stringify(details));

        let item = localStorage.getItem("myObject");
        setProduct(JSON.parse(item))
    }, [])

    const handleCart = () => {
        navigate('/cart')
    }
    const handleOrder = () => {
        navigate('/order')
    }


    return (
        <Box sx={{
            position: 'relative',
            width: '100%',
            height: '30rem',
            display: 'flex',
            top: '6rem',
            mb: '1rem',
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
                    pt: '1rem',
                    pl: '2rem'
                }}>
                    <Typography sx={{ fontSize: '1.5rem', fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }}>{product.name}</Typography>
                    <Typography>{product.discription}</Typography>
                    <Box sx={{
                        display: 'flex',
                        gap: 1
                    }}>
                        <Typography sx={{ fontSize: '1.5rem' }} ><b>{'₹' + product.offrate}</b></Typography>
                        <Typography color='lightgrey'><s>{product.rate}</s></Typography>
                        <Typography color='green'>{product.off + '% OFF'}</Typography>
                    </Box>
                    <Typography>{product.weight}</Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    gap: 4,
                    width: '100%',
                    pt: '3rem',
                    pl: '2rem'
                }}>
                    <Button onClick={handleCart} variant="contained" sx={{ bgcolor: '#ef6c00', "&:hover": { backgroundColor: "#ef6c00", } }} startIcon={<ShoppingCartIcon />}>ADD TO CART</Button>
                    <Button onClick={handleOrder} variant="contained" sx={{ bgcolor: '#ff3d00', "&:hover": { backgroundColor: "#ff3d00", } }} startIcon={<LocalMallIcon />}>BUY NOW</Button>
                </Box>
            </Box>

        </Box>
    )
}

export default view