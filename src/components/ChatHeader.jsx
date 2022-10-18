import { AppBar, Avatar, Button, Toolbar, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { Box } from '@mui/system';
import styled from '@emotion/styled';
import { ChatContext } from '../Context/ChatContext'
import { ChatIDContext } from '../Context/ChatIDContext';
import { baseUrl } from '../url';


const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",

})

function ChatHeader() {
    const { chat, setChat } = useContext(ChatContext)
    const { chatURL, setChatURL, setChatID } = useContext(ChatIDContext)

    const handleLeave = () => {
        setChat('')
        setChatURL('')
        setChatID('')
    }

    return (
        <AppBar position="sticky">
            <StyledToolbar variant="dense" >
                <Box display="flex" alignItems="center" gap={1}>
                    {chat && <Avatar alt="img" src={baseUrl + chatURL} />}
                    <Typography variant="h8">
                        {chat}
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={1} bgcolor="white" borderRadius={2}>
                    {chat && <Button variant="outlined" onClick={handleLeave}>Leave chat</Button>}
                </Box>
            </StyledToolbar>
        </AppBar>
    )
}

export default ChatHeader