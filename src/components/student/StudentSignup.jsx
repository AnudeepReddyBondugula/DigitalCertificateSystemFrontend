import { Container, Typography, TextField, Button, Paper, CssBaseline } from '@mui/material';
import { Link } from 'react-router-dom';
const StudentSignup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add signup logic here
  };

  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Student Signup
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Retype Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Aadhar Card"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Private Key"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Full Name (as per Aadhar Card)"
            variant="outlined"
            fullWidth
            margin="normal"
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
          Aldready have an account? <Link to="/user/login">Login here</Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default StudentSignup;
