import { Container, Typography, TextField, Button, Paper, CssBaseline} from '@mui/material';

import { Link } from 'react-router-dom';

const StudentLogin = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
  };

  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Student Login
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
          Dont have an account? <Link to="/user/signup">Signup here</Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default StudentLogin;
