import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/Context'
import FavoriteIcon from '@mui/icons-material/Favorite';
import './product.css'
import { baseUrl } from '../../url'
import axios from 'axios'




function Products({ tab, items }) {
    const navigate = useNavigate()
    const { setDetails } = useContext(UserContext)
    const [wishlist, setWishlist] = useState([])
    useEffect(() => {
        let user = localStorage.getItem("user")
        user = JSON.parse(user)
        if (!user) return navigate('/')
        const customConfig = {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        }

        axios.get(`${baseUrl}/api/wishlist/list`, customConfig)
            .then((res) => {
                setWishlist(res.data.items)
            }).catch((err) => {
                navigate('/')
            })
    }, [])


    const handleView = (item) => () => {
        if (item) setDetails(item)
        navigate('/view')
    }

    const handleIcon = (id) => {
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
                // console.log(res.data.items);
            }).catch((err) => {
                // console.log(err);
                navigate('/')
            })
    }



    return (
        <Box sx={{ flexGrow: 1, bgcolor: '#F6F3F3' }}>
            <Grid container spacing={2} sx={{ pl: '2rem', bgcolor: '#F6F3F3' }}>
                {items.map((item, index) =>
                    <Grid item xs={6} md={2} key={item._id} >
                        <Box key={item._id} sx={{ ml: '-2.5rem', width: '100%', position: 'relative' }}>
                            <Box >
                                {wishlist && wishlist.map((wish, index) =>
                                    wish.itemId === item._id &&

                                    <FavoriteIcon key={index} onClick={() => handleIcon(item._id)} className='like_btn1' style={{ color: "#FC5750" }} />
                                )}

                                <FavoriteIcon onClick={() => handleIcon(item._id)} className='like_btn2' />
                            </Box>
                            <Box className='box' sx={{
                                width: '15rem',
                                height: '17rem',
                                position: 'relative',
                                mt: '0.5rem',
                                pt: '1rem',
                                pl: '1rem',
                                pr: '1.7rem',
                                display: 'flex',
                                gap: 1,
                                bgcolor: '#F6F3F3'
                            }} onClick={handleView(item)}>
                                <Box className='boxitems' sx={{
                                    bgcolor: 'white', width: '14rem', '&:hover': {
                                        color: 'blue',
                                    },
                                }} >
                                    <Box sx={{
                                        width: '15rem',
                                        height: '10rem',
                                        position: 'absolute'
                                    }}>
                                        <img alt='img' src={baseUrl + '/' + item.url} width='82%' height='100%'></img>
                                    </Box>
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        pl: '1rem',
                                        position: 'relative',
                                        pt: '11rem'
                                    }}>
                                        <Typography className='boxZoom' sx={{
                                            fontSize: '1rem',
                                            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',

                                        }}>
                                            {item.name}
                                        </Typography>
                                        <Box sx={{
                                            display: 'flex',
                                            gap: 1
                                        }}>
                                            <Typography color='black' sx={{ fontSize: '1rem' }} ><b>₹{item.price - (item.price * item.offer) / 100}</b></Typography>
                                            <Typography color='lightgrey'><s>{item.price}</s></Typography>
                                            <Typography color='green'>{item.offer + '% OFF'}</Typography>
                                        </Box>
                                        <Typography color='black'>{item.weight}g</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                )}
            </Grid>
        </Box >
    )
}

export default Products