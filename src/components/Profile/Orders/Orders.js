import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import axios from 'axios';
import { baseUrl } from '../../../url'

function Orders() {
    const [items, setItems] = useState([])

    useEffect(() => {
        let user = localStorage.getItem("user")
        user = JSON.parse(user)
        const customConfig = {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        }

        axios.get(`${baseUrl}/api/order/orders`, customConfig)
            .then((res) => {
                // console.log("orders:"+res.data);
                // console.log(res.data);
                setItems(res.data)
            })
    }, [])

    return (
        <Box sx={{

            bgcolor: 'white',
            p: '2rem',
            borderRadius: '1rem',
            boxShadow: "1px 1px 6px 0px grey",
            width: '65rem'
        }}>
            <Typography><b>My Orders</b></Typography>
            <Box sx={{
                height: 350,
                overflow: "hidden",
                overflowY: "scroll",
            }}>
                {items.map((item) =>
                    < Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        border: 1,
                        borderColor: 'lightgrey',
                        width: '55rem',
                        pl: '1rem',
                        pr: '1rem',
                        mt: '1rem'
                    }} key={item._id}>

                        <Box>
                            <img alt='img' src={baseUrl + '/' + item.url} width='100' height='100'></img>
                        </Box>
                        <Box>
                            <Typography>{item.name}</Typography>
                            <Typography>{'Price:' + item.price + ' Qty:' + item.quantity}</Typography>
                        </Box>
                        <Box>
                            <Typography><FiberManualRecordIcon sx={{ color: 'yellow' }} />{item.status}</Typography>
                        </Box>
                    </Box>)}



            </Box>
        </Box >
    )
}

export default Orders
