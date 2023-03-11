import { Box } from '@mui/system'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { Badge, IconButton } from '@mui/material';
import { UserContext } from '../../../Context/Context';
import axios from 'axios';
import { baseUrl } from '../../../url'

function cartIcon() {
    const navigate = useNavigate()
    const { cartitems, setCartitems } = useContext(UserContext)
    const [items, setItems] = useState([])
    useEffect(() => {
        let user = localStorage.getItem("user")
        user = JSON.parse(user)
        if (!user) return navigate('/')
        const customConfig = {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        }
        // console.log('cart-api');
        axios.get(`${baseUrl}/api/cart/cartitems`, customConfig)
            .then((res) => {
                setItems(res.data.items)
                setCartitems(res.data)
                // console.log(cartitems);
            }).catch((err) => {
                // console.log("error:" + err.response.statusText);
                if (err.response.statusText === 'Unauthorized') {
                    localStorage.clear()
                    navigate('/')
                }
            })

    }, [])

    useEffect(() => {
        setItems(cartitems.items)
        // console.log('items'+cartitems);
    }, [cartitems])



    return (
        <Box>
            <IconButton onClick={() => navigate('/cart')}>
                <Badge badgeContent={items && items.length} color='success'>
                    <LocalMallOutlinedIcon sx={{ fontSize: 30 }} color="action" />
                </Badge>
            </IconButton>
        </Box>
    )
}

export default cartIcon