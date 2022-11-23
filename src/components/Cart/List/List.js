import { Paper } from '@mui/material'
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import Quantity from './Quantity/Quantity'
import ProductDetails from './ProductDetails/ProductDetails';
import Delivery from './Delivery/Delivery';

function List() {
    const [product, setProduct] = useState({})
    useEffect(() => {
        let item = localStorage.getItem("myObject");
        setProduct(JSON.parse(item))

    }, [])
    console.log(product);
    return (
        <Paper sx={{
            position: 'relative',
            display: 'flex',
            gap: 3,
            m: '1rem'
        }}>
            <Box sx={{
                mt: '1rem',
                mb: '1rem'
            }}>
                <img src={product.url} alt='img' width={150} height={100}></img>
                <Quantity />
            </Box>
            <Box>
                <ProductDetails />
            </Box>
            <Box sx={{
                ml:'7rem',
                mt:'2rem'
            }}>
                <Delivery/>
            </Box>
        </Paper>
    )
}

export default List