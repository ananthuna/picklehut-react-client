import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import Button from '@mui/material/Button';
import React, { useContext } from 'react';
import axios from 'axios';
import { baseUrl } from '../../../../url'
import { UserContext } from '../../../../Context/Context';

function Delivery({ item, summary }) {

    const { setCartitems } = useContext(UserContext)

    const handleRemove = () => {
        let user = localStorage.getItem("user")
        user = JSON.parse(user)
        const customConfig = {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        }

        axios.delete(`${baseUrl}/api/cart/cartitems/?itemId=${item.itemId}`, customConfig)
            .then((res) => {
                setCartitems(res.data)
            })

    }

    const handleWishlist = (id) => {
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
                // console.log(res.data.items);
            }).catch((err) => {
                // console.log(err);
            })
    }
    return (
        <Box>
            <Box sx={{
                display: 'flex',
                right: '1rem',
                pr:'1rem'
            }}>
                <Typography>Delivery by Mon Dec 5 |</Typography>
                <Typography sx={{ color: 'green' }}>Free</Typography>
            </Box>
            {!summary && <Box sx={{
                display: 'flex',
                mt: '3rem',
            }}>
                <Button variant="text" onClick={() => handleWishlist(item.itemId)}>Add to wishlist</Button>
                <Button variant="text" onClick={handleRemove}>REMOVE</Button>
            </Box>}
        </Box>
    )
}

export default Delivery