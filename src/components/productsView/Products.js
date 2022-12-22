import { Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/Context'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './product.css'
import {baseUrl} from '../../url'

// const products = [
//     { name: 'kera pickle', rate: 150, off: 25, offrate: 112.5, weight: '400g', discription: 'sea fish', url: 'https://m.media-amazon.com/images/I/615J2pvNaGL._SL1000_.jpg' },
//     { name: 'kakka pickle', rate: 250, off: 25, offrate: 187.5, weight: '400g', discription: 'fresh water fish', url: 'https://m.media-amazon.com/images/I/615J2pvNaGL._SL1000_.jpg' },
//     { name: 'pallathy', rate: 180, off: 25, offrate: 135, weight: '400g', discription: 'fresh water fish', url: 'https://m.media-amazon.com/images/I/615J2pvNaGL._SL1000_.jpg' },
//     { name: 'vayamp', rate: 350, off: 25, offrate: 262.5, weight: '400g', discription: 'fresh water fish', url: 'https://m.media-amazon.com/images/I/615J2pvNaGL._SL1000_.jpg' },
//     { name: 'kera pickle', rate: 200, off: 25, offrate: 150, weight: '400g', discription: 'sea fish', url: 'https://m.media-amazon.com/images/I/615J2pvNaGL._SL1000_.jpg' },
//     { name: 'kakka pickle', rate: 550, off: 25, offrate: 412.5, weight: '400g', discription: 'fresh water fish', url: 'https://m.media-amazon.com/images/I/615J2pvNaGL._SL1000_.jpg' },
//     { name: 'pallathy', rate: 350, off: 25, offrate: 262.5, weight: '400g', discription: 'fresh water fish', url: 'https://m.media-amazon.com/images/I/615J2pvNaGL._SL1000_.jpg' },
//     { name: 'vayamp', rate: 140, off: 25, offrate: 105, weight: '400g', discription: 'fresh water fish', url: 'https://m.media-amazon.com/images/I/615J2pvNaGL._SL1000_.jpg' },
// ]


function Products({ tab,items }) {
    const navigate = useNavigate()
    const { setDetails } = useContext(UserContext)
    const [icon, seticon] = useState()

    const handleView = (item) => () => {
        console.log(item);
        if (item) setDetails(item)
        navigate('/view')
    }

    const handleIcon = (index) => () => {
        console.log(index);
        seticon(index)
    }
    


    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} sx={{ ml: '1rem' }}>
                {items.map((item, index) =>
                    <Grid item xs={6} md={2} key={index}>
                        <Paper elevation={3} sx={{ ml: '-2rem', width: '100%', position: 'relative' }}>
                            {icon === index ? <FavoriteBorderIcon key={index} onClick={handleIcon(index)} className='like_btn' style={{ color: "red" }} /> : <FavoriteBorderIcon onClick={handleIcon(index)} key={index} className='like_btn' />}
                            <Box className='box' sx={{
                                width: '15rem',
                                height: '17rem',
                                position: 'relative',
                                mt: '2rem',
                                pt: '1rem',
                                pr: '3rem'
                            }} onClick={handleView(item)}>

                                <Box sx={{
                                    width: '15rem',
                                    height: '9rem',
                                    position: 'absolute'
                                }}>
                                    <img alt='img' src={baseUrl+'/'+item.url} width='82%' height='100%'></img>
                                    
                                    
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    position: 'relative',
                                    pt: '9rem'
                                }}>
                                    <Typography component={'span'}>{item.name}</Typography>
                                    <Typography component={'span'}>{item.discription}</Typography>
                                    <Typography component={'span'}>{item.weight}</Typography>
                                    <Typography component={'span'}>{"₹" + item.price + "    " + item.offer + "off"}</Typography>
                                </Box>

                            </Box>
                        </Paper>
                    </Grid>
                )}
            </Grid>
        </Box>
    )
}

export default Products