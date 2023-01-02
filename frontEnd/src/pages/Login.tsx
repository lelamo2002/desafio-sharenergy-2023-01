import { useNavigate } from "react-router-dom";
import { AppButton } from "../components/AppButton";
import { useState } from "react";
import { Box, Checkbox, Container, FormControlLabel, TextField, Typography } from "@mui/material";
import { api } from "../services/api";
import authService from "../services/auth.service";

function Login() {

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {

    setIsLoading(true);


    authService.login(username, password).then(
      () => {
        // console.log('login success');
        navigate('/home');
      },
      error => {
        // console.log('login error');
        if (error.response.data.code === 401) {
          alert('Invalid credentials')

        }


        setIsLoading(false);

      }
    );


    // try {


    //   const response = await api.post('/login', {
    //     username,
    //     password
    //   });

    //   const user = {
    //     username: response.data.username,
    //     token: response.data.token
    //   }
    //   e.preventDefault();
    //   navigate('/home')

    // }
    // catch (error: any) {

    //   if (error.response.data.code === 401) {
    //     alert('Invalid credentials')

    //   }


    //   setIsLoading(false);

    //   // e.preventDefault();
    //   // navigate('/home')
    //   // usestate, useeffect
    // }
  }




  return (

    <div style={{ backgroundColor: '#f8f8f8', height: '100vh', width: '100vw' }}>
      <Container component="main" maxWidth="xs" style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }} >

        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '16px',
        }} style={{
          borderRadius: '50px',
          background: '#f8f8f8',
          boxShadow: '20px 20px 60px #aeaeae, -20px -20px 60px #ffffff',
        }}>
          <Typography component="h1" variant="h5" style={{ fontSize: 24, color: '#d6df27', fontWeight: "bold" }}>
            Sign in
          </Typography>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }} component="form" onSubmit={handleSubmit}>

            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="username"
              name="username"
              autoComplete="username"
              autoFocus value={username} onChange={(event) => setUsername(event.target.value)} />

            <TextField margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} />

            <br />

            <AppButton disabled={isLoading} title={isLoading ? 'Loading...' : 'Log in'} type="submit" style={{
              backgroundColor: '#00a2a2',
              border: 0,
              padding: '6px 48px',
              color: '#fff',
            }} />

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
          </Box>



        </Box>
      </Container>

    </div >

  )
}


export { Login };