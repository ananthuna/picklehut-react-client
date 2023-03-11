import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Button from '@mui/material/Button';
import axios from 'axios'
import { baseUrl } from '../../../url'
import { useNavigate } from 'react-router-dom'

function Logout() {
    const navigate = useNavigate()
    const Data = ''

    const handleLogout = () => {
        let user = localStorage.getItem("user")
        user = JSON.parse(user)
        const customConfig = {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        }

        axios.post(`${baseUrl}/api/user/logout`, Data, customConfig)
            .then((res) => {
                localStorage.removeItem("user");
                navigate('/')
            })
    }

    const handleLogoutAll = () => {
        let user = localStorage.getItem("user")
        user = JSON.parse(user)
        const customConfig = {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        }

        axios.post(`${baseUrl}/api/user/logoutAll`, Data, customConfig)
            .then((res) => {
                // console.log('logout');
                localStorage.removeItem("user");
                navigate('/')
            }).catch(err => {
                console.log(err);
            })
    }

    return (
        <Box sx={{

            bgcolor: 'white',
            p: '2rem',
            borderRadius: '1rem',

        }}>

            <Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    border: 1,
                    borderColor: 'lightgrey',
                    width: '55rem',
                    pl: '1rem',
                    pr: '1rem',
                    pt: '1rem',
                    pb: '1rem'
                }}>

                    <Box>
                        <Typography sx={{ fontWeight: 'bold', color: 'green', lineHeight: 2 }}>Logout from all devices</Typography>
                    </Box>
                    <Box>
                        <Button variant="contained" sx={{
                            bgcolor: 'red',
                            "&:hover": { backgroundColor: "#ef6c00" },
                            m: '1.5rem'
                        }}
                            onClick={handleLogoutAll}
                        >Logout All</Button>
                    </Box>

                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    border: 1,
                    borderColor: 'lightgrey',
                    width: '55rem',
                    pl: '1rem',
                    pr: '1rem',
                    pt: '1rem',
                    pb: '1rem'
                }}>

                    <Box>
                        <Typography sx={{ fontWeight: 'bold', color: 'green', lineHeight: 2 }}>Logout from this devices</Typography>
                    </Box>
                    <Box>
                        <Button variant="contained" sx={{
                            bgcolor: 'red',
                            "&:hover": { backgroundColor: "#ef6c00" },
                            m: '1.5rem'
                        }}
                            onClick={handleLogout}
                        >Logout</Button>
                    </Box>

                </Box>



            </Box>
        </Box>
    )
}

export default Logout