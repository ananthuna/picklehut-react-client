import { Box } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { Badge, IconButton } from '@mui/material';

function cartIcon() {
    const navigate = useNavigate()

    return (
        <Box>
            <IconButton onClick={()=>navigate('/cart')}>
                <Badge badgeContent={1} color='success'>
                    <LocalMallOutlinedIcon sx={{fontSize: 30}} color="action" />
                </Badge>
            </IconButton>
        </Box>
    )
}

export default cartIcon