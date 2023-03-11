import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import axios from 'axios';
import { baseUrl } from '../../../../url'
import { Box } from '@mui/system';
import AddButton from '../../../Profile/Address/AddButton/Addaddress'
import { UserContext } from '../../../../Context/Context';
import React from "react";

export default function App() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [addresss, setAddresss] = React.useState([])
    const [name, setName] = React.useState('')
    const [number, setNumber] = React.useState('')
    const { address,setAddress } = React.useContext(UserContext)


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
                setAddresss(res.data.address)
                setName(res.data.firstName)
                setNumber(res.data.number)
                // console.log(res.data)
            })
    }, [address])

    const handleaddress = (address) => () => {
        setAddress(address)
        setAnchorEl(null)
    }

    return (
        <div>
            <Box >
                <Button
                    variant="outlined"
                    onClick={(event) => {
                        setAnchorEl(event.currentTarget);
                    }}
                    sx={{
                        width: '12rem',
                        height: '2rem',
                        m: '2rem',
                    }}>
                    change address
                </Button>
            </Box>
            <Popover
                anchorEl={anchorEl}
                open={open}
                id={open ? "simple-popover" : undefined}
                onClose={() => {
                    setAnchorEl(null);
                }}
                transformOrigin={{
                    horizontal: "center",
                    vertical: "top",
                }}
                anchorOrigin={{
                    horizontal: "center",
                    vertical: "bottom",
                }}
            >
                <Box sx={{
                    mt: '1.5rem',
                    mb: '2rem',
                    ml: '1rem',
                    width: '20rem',
                    height: '2rem',


                }}>
                    <AddButton setAddress={setAddress} />
                </Box>
                <Box sx={{
                    height: 300,
                    overflow: "hidden",
                    overflowY: "scroll",
                }}>
                    {addresss && addresss.map((address) =>
                        <Box sx={{
                            border: 1,
                            borderColor: 'lightgrey',
                            width: '60rem',
                            height: '5rem',
                            pl: '2rem',
                            pr: '2rem',
                            '&:hover': {
                                background: "lightgrey",
                            }
                        }}
                            key={address._id}
                            onClick={handleaddress(address)}>
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

                        </Box>
                    )}
                </Box>
            </Popover>
        </div>
    );
}
