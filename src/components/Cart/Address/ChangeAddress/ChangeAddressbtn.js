import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import axios from 'axios';
import { baseUrl } from '../../../../url'
import { Box } from '@mui/system';
import AddButton from '../../../Profile/Address/AddButton/Addaddress'
import { UserContext } from '../../../../Context/Context';

export default function BasicPopover() {
    const [open, setopen] = React.useState(false)
    const [addresss, setAddresss] = React.useState([])
    const [name, setName] = React.useState('')
    const [number, setNumber] = React.useState('')
    const { setAddress } = React.useContext(UserContext)


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
                console.log(res.data)
            })
    }, [])

    const handleClick = () => {
        setopen(true)
    }

    const handleClose = () => {
        setopen(false)
    };

    const handleaddress = (address) => () => {
        setAddress(address)
        setopen(false)
    }


    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <Box >
                <Button aria-describedby={id} variant="outlined" onClick={handleClick}
                    sx={{
                        width: '5.5rem',
                        height: '2rem',
                        m: '2rem',
                    }}>
                    change
                </Button>
            </Box>
            <Popover
                id={id}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Box sx={{
                    mt: '1.5rem',
                    mb: '2rem',
                    ml: '1rem',
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