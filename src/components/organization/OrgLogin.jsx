import { Container, Typography, TextField, Button, Paper, CssBaseline } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const OrgLogin = () => {

  const navigate = useNavigate();
  useEffect(() => {
    if (sessionStorage.getItem('jwToken')) navigate('/org/dashboard');
  }, [navigate]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/org/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        const data = await response.json();
        sessionStorage.jwtoken = data.token;
        navigate("/org/dashboard");
      } else {
        alert("Invalid username or password");
      }
    } catch (err) {
      console.log(err);
      alert("Cannot perform fetch");
    }
  };

  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Organization Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type='email'
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={e => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={e => setPassword(e.target.value)}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: '20px' }}
          >
            Login
          </Button>
        </form>
        <Typography variant="body2" style={{ marginTop: '20px' }}>
          Dont have an account? <Link to="/org/signup">Signup here</Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default OrgLogin;
