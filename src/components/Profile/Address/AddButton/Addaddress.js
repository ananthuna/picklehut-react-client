import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import AddIcon from '@mui/icons-material/Add';
import { Box, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import { baseUrl } from '../../../../url';
import { UserContext } from '../../../../Context/Context';


const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
    const [open, setOpen] = React.useState(false);
    const { register, handleSubmit, reset } = useForm({ mode: "onBlur" }); //removed ', formState: { errors } '
    const { setAddress } = React.useContext(UserContext)

    const handleUpload = (data) => {
        let user = localStorage.getItem("user")
        user = JSON.parse(user)
        const Data = JSON.stringify(data)
        const customConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        }
        axios.post(`${baseUrl}/api/user/address`, Data, customConfig)
            .then((res) => {
                // console.log('aadress');
                // console.log(res.data);
                setAddress(res.data)
                reset()
                setOpen(false)
            })
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add New Address<AddIcon />
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Add Devilvery Address
                        </Typography>

                    </Toolbar>
                </AppBar>
                <Box sx={{
                    mt: '5rem',
                    ml: '2rem'
                }}>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                            pt: '2rem',
                            pl: '12rem'
                        }}
                        noValidate
                        onSubmit={handleSubmit(handleUpload)}
                    >
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1,
                            width: '100%'
                        }}>
                            <Box sx={{
                                display: 'flex'
                            }}>
                                <TextField
                                    style={{ width: 400 }}
                                    label="Address"
                                    id="address"
                                    name='address'
                                    size="small"
                                    autoFocus
                                    multiline
                                    rows={2}
                                    required
                                    {...register('address', { required: true })}
                                />
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={['Home', 'Office']}

                                    renderInput={(params) => <TextField
                                        {...params}
                                        label="Home/Office"
                                        {...register('delivery', { required: true })}
                                        style={{ width: 400 }}
                                    />}
                                />
                            </Box>
                            <Box sx={{
                                display: 'flex'
                            }}>
                                <TextField
                                    style={{ width: 400 }}
                                    label="Village"
                                    id="village"
                                    name="village"
                                    size="small"
                                    autoFocus
                                    required
                                    {...register('village', { required: true })}
                                />
                                <TextField
                                    style={{ width: 400 }}
                                    label="City"
                                    id="city"
                                    name="city"
                                    size="small"
                                    autoFocus
                                    required
                                    {...register('city', { required: true })}
                                />

                            </Box>
                            <Box sx={{
                                display: 'flex'
                            }}>
                                <TextField
                                    style={{ width: 400 }}
                                    label="State"
                                    id="state"
                                    name="state"
                                    size="small"
                                    autoFocus
                                    required
                                    {...register('state', { required: true })}
                                />
                                <TextField
                                    style={{ width: 400 }}
                                    label="postal code"
                                    id="pin"
                                    name="pin"
                                    size="small"
                                    autoFocus
                                    required
                                    {...register('pin', { required: true })}
                                />

                            </Box>
                        </Box>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ mt: 3, mb: 2, ml: 1, width: '70%' }}
                        >
                            Save Address
                        </Button>
                    </Box>
                </Box>
            </Dialog>
        </div>
    );
}