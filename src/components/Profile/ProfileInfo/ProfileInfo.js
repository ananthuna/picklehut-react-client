import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import RadioButton from './RadioButton'
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

export default function StateTextFields() {
    const [fname, setfName] = React.useState('First Name');
    const [lname, setlName] = React.useState('Last Name');
    const [email, setEmail] = React.useState('ananthuna6@gmail')
    const [number, setNumber] = React.useState('+917012031852')
    const handlefname = (event) => {
        setfName(event.target.value);
    };
    const handlelname = (e) => {
        setlName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleNumber = (e) => {
        setNumber(e.target.value)
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
                onChange={handlefname}
            />
            <TextField
                id="outlined-uncontrolled"
                label="Last Name"
                value={lname}
                onChange={handlelname}
            />
            <Box>
                <RadioButton />
            </Box>
            <Typography><b>Email Address</b></Typography>
            <TextField
                id="outlined-name"
                label='Email'
                value={email}
                onChange={handleEmail}
            />
            <Typography><b>Mobile Number</b></Typography>

            <TextField
                id="outlined-name"
                label="Mobile Number"
                value={number}
                onChange={handleNumber}
            />
            <Button variant="contained" sx={{
                bgcolor: '#ef6c00',
                "&:hover": { backgroundColor: "#ef6c00" },
                top: '1rem',
                left: '15rem'
            }}

            >Save Changes</Button>

        </Box>
    );
}
