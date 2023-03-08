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
import { baseUrl } from '../url';
import { useNavigate } from 'react-router-dom'
import { Backdrop, CircularProgress } from '@mui/material';

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
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false);
  };
  let token
  const handleLogin = (event) => {

    event.preventDefault()

    const data = new FormData(event.currentTarget)
    token = localStorage.getItem("user.token")
    const loginData = {
      email: data.get('email'),
      password: data.get('password'),
      token: JSON.parse(token)
    }
    const Data = JSON.stringify(loginData);
    const customConfig = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    axios.post(`${baseUrl}/api/user/login`, Data, customConfig).then((response) => {
      console.log(response.data);
      if (response.data.err) {
        switch (response.data.err) {
          case "No account":
            setEmailError(true)
            setPasswordError(false)
            setOpen(false)
            break;
          case "invalid password":
            setPasswordError(true)
            setEmailError(false)
            setOpen(false)
            break;
          default:
            setEmailError(true)
            setPasswordError(true)
            setOpen(false)
            break;
        }
      } else {
        localStorage.setItem("user", JSON.stringify(response.data));
        navigate('/')
        // history.push('/')
      }
    })
  };

  const handleSignup = () => {
    navigate('/signup')
    // history.push('/signup')
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

        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}