import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import { AppButton } from '../../components/AppButton';
import { useState } from 'react';
import { Box, Checkbox, Container, FormControlLabel, TextField, Typography } from '@mui/material';
// import authService from '../../services/auth.service';

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (username == 'desafiosharenergy' && password == 'sh@r3n3rgy') {
      navigate('/users');
    } else {
      alert('Invalid credentials');
    }

    setIsLoading(false);
  }

  return (
    <div className={styles.container}>
      <Container component="main" maxWidth="xs" className={styles.loginBox}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '16px'
          }}
          className={styles.box}>
          <Typography component="h1" variant="h5" className={styles.text}>
            Sign in
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            component="form"
            onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="username"
              name="username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            <br />

            <AppButton
              disabled={isLoading}
              title={isLoading ? 'Loading...' : 'Log in'}
              type="submit"
              className={styles.button}
            />

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export { Login };
