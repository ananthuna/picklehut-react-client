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
import axios from '../../../axios'
import { baseUrl } from '../../../url';


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
    const { register, handleSubmit, reset} = useForm({ mode: "onBlur" }); //removed ', formState: { errors } '
    const [images, setImages] = React.useState();

    const upload = (event) => {
        setImages(event.target.files[0]);
    }

    const handleUpload = (data) => {

        let user = localStorage.getItem("user")
        user = JSON.parse(user)
        const Data = JSON.stringify(data)
        const formData = new FormData()
        formData.append("file", images)
        formData.append("item", Data)
        const customConfig = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${user.token}`
            }
        }
        axios.post(`${baseUrl}/api/item/addItem`, formData, customConfig)
            .then((res) => {
                alert('item added')
                reset()
                setImages(null)
                console.log(res.data);
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
                Add Product<AddIcon />
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
                            Add Product
                        </Typography>

                    </Toolbar>
                </AppBar>
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
                        gap: 5
                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1,
                            width: '25rem'
                        }}>
                            <TextField
                                style={{ width: 400 }}
                                label="Name"
                                id="name"
                                name='name'
                                size="small"
                                autoFocus
                                required
                                {...register('name', { required: true })}
                            />
                            <TextField
                                style={{ width: 400 }}
                                label="Discription"
                                id="description"
                                name='description'
                                size="small"
                                autoFocus
                                required
                                {...register('description', { required: true })}
                            />
                            <TextField
                                style={{ width: 400 }}
                                label="Category"
                                id="category"
                                name="category"
                                size="small"
                                autoFocus
                                required
                                {...register('category', { required: true })}
                            />
                            <TextField
                                style={{ width: 400 }}
                                label="Price"
                                id="price"
                                name="price"
                                size="small"
                                autoFocus
                                required
                                {...register('price', { required: true })}
                            />
                            <TextField
                                style={{ width: 400 }}
                                label="Quantity"
                                id="quantity"
                                name="quantity"
                                size="small"
                                autoFocus
                                required
                                {...register('quantity', { required: true })}
                            />
                            <TextField
                                style={{ width: 400 }}
                                label="Weight"
                                id="weight"
                                name="weight"
                                size="small"
                                autoFocus
                                required
                                {...register('weight', { required: true })}
                            />
                            <TextField
                                style={{ width: 400 }}
                                label="Offer"
                                id="offer"
                                name="offer"
                                size="small"
                                autoFocus
                                required
                                {...register('offer', { required: true })}
                            />
                        </Box>
                        <Box sx={{
                            width: '54%',

                        }}>
                            <Box sx={{
                                border: 1,
                                width: '24rem',
                                p: '2rem'
                            }}>

                                <Box sx={{
                                    height: '23rem'
                                }}>
                                    <Typography>Upload Image</Typography>
                                    {images ? (
                                        <Box>
                                            <img alt="not fount" width='300px' src={URL.createObjectURL(images)} />
                                        </Box>
                                    ) :
                                        (
                                            <Box>
                                                <img alt="not fount" width={"350px"} src={process.env.PUBLIC_URL + '/uploadImage.webp'} />
                                            </Box>
                                        )}
                                </Box>
                                <Box sx={{
                                    pt: '2rem'
                                }}>
                                    <input
                                        type="file"
                                        name="file"
                                        onChange={upload}

                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2, width: '80%' }}
                    >
                        Add item
                    </Button>
                </Box>
            </Dialog>
        </div>
    );
}