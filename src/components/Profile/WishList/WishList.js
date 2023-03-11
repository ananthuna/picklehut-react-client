import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext, useEffect, useState } from 'react'
import ProductDetails from '../../Cart/List/ProductDetails/ProductDetails'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import axios from 'axios';
import { baseUrl } from '../../../url'
import { UserContext } from '../../../Context/Context';
import { useNavigate } from 'react-router-dom';

function WishList() {
    const navigate = useNavigate()
    const [products, setProducts] = useState([])
    const [wishlist, setWishlist] = useState([])

    const { setDetails } = useContext(UserContext)

    useEffect(() => {
        let user = localStorage.getItem("user")
        user = JSON.parse(user)
        const customConfig = {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        }

        axios.get(`${baseUrl}/api/wishlist/wishlistitems`, customConfig)
            .then((res) => {
                setProducts(res.data)
                // console.log(res.data)
            }).catch((err) => {
                console.log(err);
            })
    }, [wishlist])

    const handleView = (item) => () => {
        if (item) setDetails(item)
        navigate('/view')
    }

    const handledelete = (id) => () => {
        let user = localStorage.getItem("user")
        user = JSON.parse(user)
        const customConfig = {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        }
        const Data = {
            itemId: id
        }
        axios.post(`${baseUrl}/api/wishlist/list`, Data, customConfig)
            .then((res) => {
                setWishlist(res.data.items)
            }).catch((err) => {
                console.log(err);
            })
    }

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
                height: 350,
                overflow: "hidden",
                overflowY: "scroll",
            }}>
                {products && products.map((product) =>
                    <Box sx={{
                        border: 1,
                        borderColor: 'lightgrey',
                        width: '65rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        ml: '-2rem'
                    }} key={product._id}>
                        <Box sx={{
                            mt: '1rem',
                            mb: '1rem',
                            ml: '1rem',
                            display: 'flex'
                        }} onClick={handleView(product)}>
                            <Box sx={{ mt: '1rem' }}>
                                <img src={baseUrl + '/' + product.url} alt='img' width={150} height={100}></img>
                            </Box>
                            <Box>
                                {product && <ProductDetails item={product} />}
                            </Box>
                        </Box>
                        <Box sx={{
                            mr: '4rem',
                            mt: '3rem'
                        }}>
                            <IconButton onClick={handledelete(product._id)} aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        </Box>
                    </Box>
                )}
            </Box>
        </Box>
    )
}

export default WishList
