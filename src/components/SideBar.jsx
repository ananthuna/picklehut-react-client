import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState, useContext } from 'react'
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import { ChatContext } from '../Context/ChatContext';
import { ChatIDContext } from '../Context/ChatIDContext';
import axios from '../axios'
import { baseUrl } from '../url';

const StyledBox = styled(Box)({
    display: "flex",
    gap: 2,
    width: 380,
    alignItems: "center",
    borderRadius: 4,
})

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

function SideBar({ socket, useradmin, message }) {
    const [users, setUsers] = useState([]);
    const { setChat, chat } = useContext(ChatContext)
    const { setChatID, setChatURL } = useContext(ChatIDContext)

    useEffect(() => {
        axios.get(`${baseUrl}/activeUsers`, { withCredentials: true }).then((response) => {
            setUsers(response.data)
        }, [])

    });

    return (

        <Box pt={1} >
            <Box sx={{ width: { xs: "100%", sm: "40%" }, height: "100%", bgcolor: "#dadff2", position: "fixed", mt: -1 }}>
                <Box sx={{ overflowY: "scroll", overflow: 'hidden', mt: -1 }}>
                    <Box m={2} bgcolor="#dadff2">
                        <Typography variant="h8" fontWeight="100" mt={4}>Online Friends</Typography>
                        {users.map((user) => user.userName !== useradmin && (
                            <Box pr={4} mt={2} >
                                <StyledBox onClick={() => {
                                    setChat(user.userName)
                                    setChatID(user.userId)
                                    setChatURL(user.imageUrl)
                                }}
                                    bgcolor="#7691f5"
                                    height={70}
                                    sx={{ width: { xs: "100%", sm: "100%" } }}
                                    pl={2}
                                >
                                    <StyledBadge
                                        overlap="circular"
                                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                        variant="dot"

                                    >
                                        <Avatar alt="Remy Sharp" src={baseUrl + user.imageUrl} />
                                    </StyledBadge>
                                    <Box ml={2} >
                                        <Typography color="black">{user.userName}</Typography>
                                        {message ? (<Typography color="white">{user.userName === message.user && !chat && message.text}</Typography>) : (<Typography color="grey">no new message</Typography>)}
                                    </Box>
                                </StyledBox>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>

    )
}

export default SideBar
