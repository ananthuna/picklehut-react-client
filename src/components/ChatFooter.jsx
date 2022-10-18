import { Button, Input } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState, useContext } from 'react'
import SendIcon from '@mui/icons-material/Send';
import { ChatIDContext } from '../Context/ChatIDContext';

function ChatFooter({ socket, user, userId }) {

    const [message, setMessage] = useState('');
    const { chatID } = useContext(ChatIDContext)
    let type = user
    let content = {
        text: message,
        user: user,
    }

    if (!chatID) {
        type = '';
        socket.emit('typing', type)
    }


    const handleSendMessage = (e) => {
        e.preventDefault();
        type = '';
        socket.emit('typing', type)
        if (message.trim() && chatID) {
            console.log('sended');
            socket.emit('private message', {
                content,
                to: chatID,
                from: userId
            })
        }
        setMessage('');

    };
    const handleTyping = () => {
        socket.emit('typing', type)
    }

    return (
        <Box sx={{ position: "fixed", bottom: "2%", width: { xs: "100%", sm: "60%" } }}>
            <Box>
                <Box alignItems='center' component="form" onSubmit={handleSendMessage}>
                    <Input
                        value={message}
                        name="text"
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={handleTyping}
                        sx={{ width: '75%', border: 1, borderRadius: 1, pl: 1, bgcolor: 'white' }}
                    />
                    <Button sx={{ width: '25%' }} variant="contained" type="submit" endIcon={<SendIcon />}>
                        Send
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default ChatFooter
