import { Box, Paper } from '@mui/material'
import Button from '@mui/material/Button';
import React, { useContext, useEffect } from 'react'
import List from './List/List'
import Address from './Address/Address'
import TotalPrice from './TotalPrice/TotalPrice'
// import PlaceOrder from './PlaceOrder/PlaceOrder'
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

                setAddress(res.data.address.pop())
                setName(res.data.firstName)
                setNumber(res.data.number)
                console.log(res.data)
            })

    }, [])

    const handlePlaceOrder = () => {
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

        axios.post(`${baseUrl}/api/order/placeOrder`, Data, customConfig)
            .then((res) => {
                navigate('/order')
            })
    }


    return (
        <Box sx={{
            display: 'flex',
            bgcolor: '#F8F8F8'
        }}>
            <Box sx={{
                mt: '5.6rem',
                width: '60%'
            }}>
                {address && name && number && <Address address={address} name={name} number={number} />}

                {cart && <List items={cartitems.items} />}

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