import { IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import AddButton from './AddButton/Addaddress';
import axios from 'axios';
import { baseUrl } from '../../../url'


function Address() {
    const [address, setAddress] = React.useState([])
    const [name, setName] = React.useState('')
    const [number, setNumber] = React.useState('')

    React.useEffect(() => {
        let user = localStorage.getItem("user")
        user = JSON.parse(user)
        const customConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        }
        axios.get(`${baseUrl}/api/user/address`, customConfig)
            .then((res) => {
                setAddress(res.data.address)
                setName(res.data.firstName)
                setNumber(res.data.number)
                // console.log(res.data)
            })
    }, [])
    const handleDelete = (id) => {
        let user = localStorage.getItem("user")
        user = JSON.parse(user)
        const customConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        }
        axios.delete(`${baseUrl}/api/user/address/?id=${id}`, customConfig)
            .then((res) => {
                console.log(res.data)
                setAddress(res.data)
            })
    }


    return (

        <Box
            sx={{
                bgcolor: 'white',
                width: '65rem',
                p: '2rem',
                borderRadius: '1rem',
                boxShadow: "1px 1px 6px 0px grey"

            }}>
            <Typography><b>Manage Address</b></Typography>
            <Box sx={{
                mt: '1.5rem',
                mb: '2rem',
                width: '20rem',
                height: '2rem',


            }}>
                <AddButton />
            </Box>
            <Box sx={{
                height: 300,
                overflow: "hidden",
                overflowY: "scroll",
            }}>
                {address && address.map((address) =>
                    <Box sx={{
                        border: 1,
                        borderColor: 'lightgrey',
                        width: '60rem',
                        height: '5rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        pl: '2rem',
                        pr: '2rem'
                    }}
                        key={address._id}>
                        <Box>
                            <Box sx={{
                                display: 'flex',
                                gap: 3
                            }}>
                                <Typography>{name}</Typography>
                                <Typography>{number}</Typography>
                            </Box>
                            <Box>
                                <Typography>{address.address + ',' + address.city + ' '}<b>{'pin:' + address.pin}</b></Typography>
                            </Box>
                        </Box>
                        <Box sx={{
                            pt: '2rem',
                            display: 'flex',
                            gap: 2
                        }}>
                            <IconButton onClick={() => handleDelete(address._id)} sx={{ color: 'red' }} aria-label="add to shopping cart">
                                <DeleteIcon />
                            </IconButton>
                        </Box>
                    </Box>
                )}
            </Box>
        </Box>
    )
}

export default Address




