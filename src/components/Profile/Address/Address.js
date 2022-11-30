import { Button, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';


function Address() {
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
                    <Button variant="outlined"><AddIcon />Add Address</Button>
                </Box>
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
                }}>
                    <Box>
                        <Box sx={{
                            display: 'flex',
                            gap: 3
                        }}>
                            <Typography>Ananthu</Typography>
                            <Typography>Mobile Number</Typography>
                        </Box>
                        <Box>
                            <Typography>Vishnupresadha,Mampuzhakary,Ramankary P O,Allapuzha,<b>689595</b></Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                        pt: '2rem',
                        display: 'flex',
                        gap: 2
                    }}>
                        <IconButton sx={{ color: 'green' }} aria-label="add to shopping cart">
                            <EditIcon />
                        </IconButton>
                        <IconButton sx={{ color: 'red' }} aria-label="add to shopping cart">
                            <DeleteIcon />
                        </IconButton>
                    </Box>
                </Box>


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
                }}>
                    <Box>
                        <Box sx={{
                            display: 'flex',
                            gap: 3
                        }}>
                            <Typography>Ananthu</Typography>
                            <Typography>Mobile Number</Typography>
                        </Box>
                        <Box>
                            <Typography>Vishnupresadha,Mampuzhakary,Ramankary P O,Allapuzha,<b>689595</b></Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                        pt: '2rem',
                        display: 'flex',
                        gap: 2
                    }}>
                        <IconButton sx={{ color: 'green' }} aria-label="add to shopping cart">
                            <EditIcon />
                        </IconButton>
                        <IconButton sx={{ color: 'red' }} aria-label="add to shopping cart">
                            <DeleteIcon />
                        </IconButton>
                    </Box>
                </Box>


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
                }}>
                    <Box>
                        <Box sx={{
                            display: 'flex',
                            gap: 3
                        }}>
                            <Typography>Ananthu</Typography>
                            <Typography>Mobile Number</Typography>
                        </Box>
                        <Box>
                            <Typography>Vishnupresadha,Mampuzhakary,Ramankary P O,Allapuzha,<b>689595</b></Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                        pt: '2rem',
                        display: 'flex',
                        gap: 2
                    }}>
                        <IconButton sx={{ color: 'green' }} aria-label="add to shopping cart">
                            <EditIcon />
                        </IconButton>
                        <IconButton sx={{ color: 'red' }} aria-label="add to shopping cart">
                            <DeleteIcon />
                        </IconButton>
                    </Box>
                </Box>
                </Box>
                
    )
}

export default Address




