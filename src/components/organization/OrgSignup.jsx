import { Container, Typography, TextField, Button, Paper, CssBaseline } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OrgSignup = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [privatekey, setPrivatekey] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (retypePassword !== password) {
      alert("Passwords doesn't match");
      return;
    }
    // Add signup logic here
    const req = {
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({
        email,
        password,
        privatekey,
        name
      })
    }
try{
  const response = await fetch("http://localhost:3000/org/signup", req);
  const data = await response.json();
  if(response.status === 201){
    sessionStorage.jwToken = data.token;
      navigate("/org/dashboard");
      return;
    }
    else{
      alert(data.message);
    }
  }
  catch(err){
    console.log(err);
    alert("Failed to perform fetch!");
  }
  };

  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Organization Signup
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
          <TextField
            label="Retype Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={e => setRetypePassword(e.target.value)}
            required
          />
          <TextField
            label="Private Key"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={e => setPrivatekey(e.target.value)}
            required
          />
          <TextField
            label="Name of the Organization"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={e => setName(e.target.value)}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: '20px' }}
          >
            Signup
          </Button>
        </form>
        <Typography variant="body2" style={{ marginTop: '20px' }}>
          Aldready have an account? <Link to="/org/login">Login here</Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default OrgSignup;
