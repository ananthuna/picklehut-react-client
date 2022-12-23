import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext, useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { UserContext } from '../../../../Context/Context';
import axios from 'axios';
import {baseUrl} from '../../../../url'

function Quantity({ item }) {
    const [numb, setNumb] = useState(item.quantity)
    const { setCartitems } = useContext(UserContext)

    useEffect(() => {
        let user = localStorage.getItem("user")
        user = JSON.parse(user)
        const customConfig = {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        }
        const data = {
            quantity: numb
        }

        axios.patch(`${baseUrl}/api/cart/cartitems/${item.itemId}`, data, customConfig)
            .then((res) => {
                setCartitems(res.data)
            })
    }, [numb])
    return (
        <Box sx={{
            display: 'flex',
            gap: 1,
            justifyContent: 'center',
            mt: '1rem'
        }}>
            <Box sx={{
                border: 1,
                borderRadius: '50%'
            }}>
                <AddIcon onClick={() => setNumb(numb => numb + 1)} />
            </Box>
            <Box sx={{
                border: 1,
                borderRadius: 1,
                width: '2rem'
            }}>
                <Typography align='center'>{item.quantity}</Typography>
            </Box>
            <Box sx={{
                border: 1,
                borderRadius: '50%'
            }}>
                {numb === 1 ? (<RemoveIcon />) : (<RemoveIcon onClick={() => setNumb(numb => numb - 1)} />)}
            </Box>
        </Box>
    )
}

export default Quantity