import React, { useContext, useEffect, useRef, useState } from 'react'
import { Box, Stack } from '@mui/system'
import AdminNavbar from '../components/AdminHeader'
import ChatHeader from '../components/ChatHeader'
import SideBar from '../components/SideBar'
import ChatBody from '../components/ChatBody'
import ChatFooter from '../components/ChatFooter'
import axios from '../axios'
import { UserContext } from '../Context/Context'
import { ChatIDContext } from '../Context/ChatIDContext';
import {baseUrl} from '../url' 


function Chatpage({ socket }) {
  const { setImageURL } = useContext(UserContext)
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState()
  const [user, setUser] = useState(null)
  const [userId, setUserId] = useState(null)
  const [typingStatus, setTypingStatus] = useState('')
  const lastMessageRef = useRef(null);
  const { chatID } = useContext(ChatIDContext)

  useEffect(() => {

    axios.get(`${baseUrl}/auth`, { withCredentials: true }).then((response) => {
      if (response.data.loginGranted) {
        setUser(response.data.user.firstName)
        setUserId(response.data.user._id)
        setImageURL(response.data.user.imageUrl)
        socket.on(userId, ({ content }) => {
          console.log(content);
          console.log(userId);
          setMessage(content)
          setMessages([...messages, content])
          console.log(messages);
        })
      }
    })
  })

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    // send typing status to backend using socket.io
    socket.on('typingResponse', (data) => setTypingStatus(data));
  }, [socket]);

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between">
        {chatID ? (<Box sx={{ width: { xs: "100%", sm: "40%" }, display: { xs: "none", sm: "block" } }}>
          <AdminNavbar socket={socket} user={user} />
          <SideBar socket={socket} useradmin={user} message={message} />
        </Box>)
          :
          (<Box sx={{ width: { xs: "100%", sm: "40%" }, display: { xs: "block" } }}>
            <AdminNavbar socket={socket} user={user} />
            <SideBar socket={socket} useradmin={user} message={message} />
          </Box>)
        }
        {chatID ?
          (<Box sx={{ width: { xs: '100%', sm: "60%" }, }} >
            <ChatHeader />
            <ChatBody user={user} messages={messages} lastMessageRef={lastMessageRef} typingStatus={typingStatus} />
            <ChatFooter user={user} userId={userId} socket={socket} />
          </Box>)
          :
          (<Box sx={{ display: { xs: "none", sm: "block" }, width: '60%', }} >
            <ChatHeader />
            <ChatBody user={user} messages={messages} lastMessageRef={lastMessageRef} typingStatus={typingStatus} />
            <ChatFooter user={user} userId={userId} socket={socket} />
          </Box>)
        }
      </Stack>
    </Box>
  )
}

export default Chatpage
