import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'

function ProductDetails() {
    const [product, setProduct] = useState({})

    useEffect(() => {
        let item = localStorage.getItem("myObject");
        setProduct(JSON.parse(item))
    }, [])
    
    return (
        <Box>
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
        </Box>
    )
}

export default ProductDetails