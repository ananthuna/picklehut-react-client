import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import RadioButton from './RadioButton'
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import axios from 'axios';
import { baseUrl } from '../../../url'

export default function StateTextFields() {
    const [fname, setfName] = React.useState('First Name');
    const [lname, setlName] = React.useState('Last Name');
    const [email, setEmail] = React.useState('ananthuna6@gmail')
    const [number, setNumber] = React.useState('+917012031852')
    React.useEffect(() => {
        let user = localStorage.getItem("user")
        user = JSON.parse(user) || ''
        const customConfig = {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        }
        axios.get(`${baseUrl}/api/user/profileinfo`, customConfig)
            .then((res) => {
                setfName(res.data.firstName)
                setlName(res.data.lastName)
                setEmail(res.data.email)
                setNumber(res.data.number)
                console.log(res.data.number);
            }).catch((err) => {
                // if (err.response.statusText === 'Unauthorized') {
                //     navigate('/login')
                // }
            })

    }, [])

    const handleSave = () => {
        let user = localStorage.getItem("user")
        user = JSON.parse(user)
        const customConfig = {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        }
        const Data = {
            firstName: fname,
            lastName: lname,
            email: email,
            number: number
        }
        axios.post(`${baseUrl}/api/user/updateProfile`, Data, customConfig)
            .then((res) => {
                console.log(res.data);
            }).catch((err) => {
                // if (err.response.statusText === 'Unauthorized') {
                //     navigate('/login')
                // }
            })
    }



    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
                bgcolor: 'white',
                width: '65rem',
                p: '2rem',
                borderRadius: '1rem',
                boxShadow: "1px 1px 6px 0px grey"
            }}
            noValidate
            autoComplete="off"
        >
            <Typography><b>Profile Information</b></Typography>
            <TextField
                id="outlined-name"
                label="First Name"
                value={fname}
                onChange={(e) => setfName(e.target.value)}
            />
            <TextField
                id="outlined-uncontrolled"
                label="Last Name"
                value={lname}
                onChange={(e) => setlName(e.target.value)}
            />
            <Box>
                {/* <RadioButton /> */}
            </Box>
            <Typography><b>Email Address</b></Typography>
            <TextField
                id="outlined-name"
                label='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Typography><b>Mobile Number</b></Typography>

            <TextField
                id="outlined-name"
                label="Mobile Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />
            <Button variant="contained" sx={{
                bgcolor: '#ef6c00',
                "&:hover": { backgroundColor: "#ef6c00" },
                top: '1rem',
                left: '15rem'
            }}
                onClick={handleSave}
            >Save Changes</Button>

        </Box>
    );
}
