import { Box } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import List from './List/List'
import Address from './Address/Address'
import TotalPrice from './TotalPrice/TotalPrice'
import PlaceOrder from './PlaceOrder/PlaceOrder'
import axios from 'axios'
import { baseUrl } from '../../url'
import { UserContext } from '../../Context/Context'

function CartItems() {
    const [cart, setCart] = React.useState(false)
    const { cartitems, setCartitems } = useContext(UserContext)
    useEffect(() => {
        let user = localStorage.getItem("user")
        user = JSON.parse(user)
        const customConfig = {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        }

        axios.get(`${baseUrl}/api/cart/cartitems`, customConfig)
            .then((res) => {
                setCart(true)
                setCartitems(res.data)
                
            })
    }, [])


    return (
        <Box sx={{
            display: 'flex',
            bgcolor: '#F8F8F8'
        }}>
            <Box sx={{
                mt: '5.6rem',
                width: '60%'
            }}>
                <Address />

                {cart && <List items={cartitems.items} />}

                <PlaceOrder />
            </Box>
            <Box sx={{
                width: '40%'
            }}>
                {cart && <TotalPrice bill={cartitems.bill} items={cartitems.items} />}
            </Box>
        </Box>
    )
}

export default CartItems