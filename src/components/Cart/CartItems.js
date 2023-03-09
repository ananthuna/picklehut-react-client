import { Box, Paper } from '@mui/material'
import Button from '@mui/material/Button';
import React, { useContext, useEffect } from 'react'
import List from './List/List'
import Address from './Address/Address'
import TotalPrice from './TotalPrice/TotalPrice'
import axios from 'axios'
import { baseUrl } from '../../url'
import { UserContext } from '../../Context/Context'
import { useNavigate } from 'react-router-dom';

function CartItems() {
    const [cart, setCart] = React.useState(false)
    const { cartitems, setCartitems } = useContext(UserContext)
    const { address, setAddress } = useContext(UserContext)
    const [name, setName] = React.useState('')
    const [number, setNumber] = React.useState('')
    const navigate = useNavigate()
    // const { setValue } = useContext(UserContext)

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


        axios.get(`${baseUrl}/api/user/address`, customConfig)
            .then((res) => {
                setAddress(res.data.address[0])
                setName(res.data.firstName)
                setNumber(res.data.number)
            })

    }, [])


    const handlePlaceOrder = () => {
        if (!address) return alert('delivery address is empty')
        // if (!number) {
        //     alert('Need contact number added.')
        //     setValue(0)
        //     navigate('/account')
        //     return
        // }
        if (cartitems==='empty cart'){
            alert('cart is empty.continue purchase?')
            return navigate('/')
        }
        let user = localStorage.getItem("user")
        user = JSON.parse(user)
        const customConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        }
        const Data = {
            amount: cartitems.bill + 40,
            address: address._id,
            items: cartitems.items
        }

        if (cartitems.items) {
            axios.post(`${baseUrl}/api/order/placeOrder`, Data, customConfig)
                .then((res) => {
                    navigate('/order')
                })
        } else {
            alert('cart is empty')
        }
    }


    return (
        <Box sx={{
            display: 'flex',
            bgcolor: '#F8F8F8',
            pb: '9rem'
        }}>
            <Box sx={{
                mt: '5.6rem',
                width: '60%'
            }}>
                <Address address={address} name={name} number={number} />

                <List items={cartitems.items} />

                <Box>
                    <Paper sx={{
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'end',
                        m: '1rem'
                    }}>
                        <Button variant="contained" sx={{
                            bgcolor: '#ef6c00',
                            "&:hover": { backgroundColor: "#ef6c00" },
                            m: '1.5rem'
                        }}
                            onClick={handlePlaceOrder}
                        >Place Order</Button>
                    </Paper>
                </Box>
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