import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from '../axios'
import '../components/background/bg.css'
import { baseUrl } from '../url';
import { useNavigate } from 'react-router-dom'

function Copyright(props) {


  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();


export default function SignIn({ socket }) {

  const navigate = useNavigate()
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  const handleLogin = (event) => {

    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const loginData = {
      email: data.get('email'),
      password: data.get('password'),
    }

    axios.post(`${baseUrl}/login`, loginData, { withCredentials: true }).then((response) => {
      if (!response.data.error) {
        setEmailError(false)
        setPasswordError(false)
        if (response.data.loginGranted) {
          console.log(response.data)
          axios.get(`${baseUrl}/auth`, { withCredentials: true }).then((response) => {
            socket.emit('newUser', { userName: response.data.user.firstName, userId: response.data.user._id, imageUrl: response.data.user.imageUrl });
            navigate('/chatpage')
          })
        }
      } else {
        if (response.data.error === "email") {
          setEmailError(true)
        } else {
          setPasswordError(true)
          setEmailError(false)
        }

      }
    })
  };

  const handleSignup = () => {
    navigate('/signup')
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <ForumOutlinedIcon />
            </Avatar>
            <Typography sx={{ component: "h1", variant: "h5", color: "secondary.main" }}>CHIT CHAT</Typography>
          </Box>
          <Typography component="h2" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
            {emailError ? (
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Invalid Email"
                name="email"
                autoComplete="email"
                autoFocus
                error
              />
            ) : (
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
            )}

            {passwordError ? (
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Inavalid Passsword"
                type="password"
                id="password"
                autoComplete="current-password"
                error
              />
            ) : (
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            )}

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link onClick={handleSignup} href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}