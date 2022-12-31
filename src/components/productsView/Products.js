import { Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/Context'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
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
        const customConfig = {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        }

        axios.get(`${baseUrl}/api/wishlist/list`, customConfig)
            .then((res) => {
                setWishlist(res.data.items)
            }).catch((err) => {
                console.log(err);
            })
    }, [])


    const handleView = (item) => () => {
        console.log(item);
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
            }).catch((err) => {
                console.log(err);
            })
    }



    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} sx={{ ml: '1rem' }}>
                {items.map((item, index) =>
                    <Grid item xs={6} md={2} key={index}>
                        <Paper elevation={3} sx={{ ml: '-2rem', width: '100%', position: 'relative' }}>
                            {wishlist && wishlist.map((wish) =>
                                wish.itemId == item._id ?
                                    (
                                        item.wish ?
                                            (
                                                <FavoriteBorderIcon onClick={() => handleIcon(item._id)} className='like_btn' style={{ color: "red" }} />
                                            ) : (
                                                <FavoriteBorderIcon onClick={() => handleIcon(item._id)} className='like_btn' style={{ color: "red" }} />
                                            )
                                    ) : (
                                        <FavoriteBorderIcon onClick={() => handleIcon(item._id)} className='like_btn' />
                                    )
                            )}
                            <Box className='box' sx={{
                                width: '15rem',
                                height: '17rem',
                                position: 'relative',
                                mt: '2rem',
                                pt: '1rem',
                                pr: '3rem'
                            }} onClick={handleView(item)}>

                                <Box sx={{
                                    width: '15rem',
                                    height: '9rem',
                                    position: 'absolute'
                                }}>
                                    <img alt='img' src={baseUrl + '/' + item.url} width='82%' height='100%'></img>


                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    position: 'relative',
                                    pt: '9rem'
                                }}>
                                    <Typography component={'span'}>{item.name}</Typography>
                                    <Typography component={'span'}>{item.discription}</Typography>
                                    <Typography component={'span'}>{item.weight}</Typography>
                                    <Typography component={'span'}>{"₹" + item.price + "    " + item.offer + "off"}</Typography>
                                </Box>

                            </Box>
                        </Paper>
                    </Grid>
                )}
            </Grid>
        </Box>
    )
}

export default Products