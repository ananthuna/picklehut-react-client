import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import ProductDetails from '../../Cart/List/ProductDetails/ProductDetails'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

function WishList() {

    const [product, setProduct] = useState({})
    useEffect(() => {
        let item = localStorage.getItem("myObject");
        setProduct(JSON.parse(item))

    }, [])

    return (
        <Box sx={{
            bgcolor: 'white',
            width: '65rem',
            p: '2rem',
            borderRadius: '1rem',
            boxShadow: "1px 1px 6px 0px grey"

        }}>
            <Typography><b>My WishList</b></Typography>
            <Box sx={{
                border: 1,
                borderColor: 'lightgrey',
                width: '65rem',
                display: 'flex',
                ml: '-2rem'
            }}>
                <Box sx={{
                    mt: '1rem',
                    mb: '1rem'
                }}>
                    <img src={product.url} alt='img' width={150} height={100}></img>
                </Box>
                <Box sx={{ ml: '5rem' }}>
                    {product && <ProductDetails item={product} />}
                </Box>
                <Box sx={{
                    ml: '32rem',
                    mt: '3rem'
                }}>
                    <IconButton aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    )
}

export default WishList
