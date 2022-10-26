import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { ChatIDContext } from '../Context/ChatIDContext';
import './background/bg.css'

function ChatBody({ messages, user, lastMessageRef, typingStatus }) {
  const { chatID } = useContext(ChatIDContext)

  return (

    <Box>
      <Box className="bg"></Box>
      <Box>
        <Box sx={{ overflowY: "scroll", overflow: 'hidden' }}>
          <Box>
            <Box sx={{ pb: 8 }}>
              {chatID ? (messages.map((message) =>
                message.user === user ? (
                  <Box
                    display="inline-flex"
                    width='100%'
                    justifyContent="right"
                    sx={{ p: 2, }}>
                    <Box>
                      <Typography align='right'>you</Typography>
                      <Box sx={{ bgcolor: "#f5ccc2", Width: "50%", p: 2, borderRadius: 4, fontSize: "2rem" }}>
                        <Typography>{message.text}</Typography>
                      </Box>
                    </Box>
                  </Box>
                ) : (
                  <Box
                    display="inline-flex"
                    width='100%'
                    justifyContent="left"
                    sx={{ p: 2, }}>
                    <Box>
                      <Typography align='left'>{message.user}</Typography>
                      <Box sx={{ bgcolor: "rgb(194, 243, 194)", Width: "50%", p: 2, borderRadius: 4, ml: 1, fontSize: "2rem" }}>
                        <Typography>{message.text}</Typography>
                      </Box>

                    </Box>
                    <Box ref={lastMessageRef} />
                  </Box>
                ))) : (
                <Box sx={{ display: "flex", justifyContent: "center", pt: 20 }}>
                  <Typography>Chat is empty </Typography>
                </Box>
              )}
            </Box>
            <Box sx={{ position: "fixed", bottom: "10%", left:{ xs: "5%", sm: "41%" } }}>
              <Typography>{typingStatus && chatID && `${typingStatus} is typing...`}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ChatBody
