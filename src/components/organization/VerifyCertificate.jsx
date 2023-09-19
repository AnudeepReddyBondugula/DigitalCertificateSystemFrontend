import { TextField, Button, Grid, Paper, Typography } from '@mui/material';
import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

function VerifyCertificate() {
  // State to store form input values
  const [studentAddress, setStudentAddress] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const jwToken = sessionStorage.getItem('jwToken');
    if (!jwToken){
      navigate('/org/login');
      return;
    } [navigate]});

  // Handle form submission
  const handleSend = () => {
    // Perform verification logic here
    // You can access the input values using studentAddress, studentEmail, and description
    // Add your verification code here
  };

  const handleCancel = () => {
    navigate('/org/dashboard');
  };

  return (
    <div style={{ padding: '20px' }}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h5">Certificate Verification</Typography>
        <form onSubmit={handleSend}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Student Address"
                variant="outlined"
                value={studentAddress}
                onChange={(e) => setStudentAddress(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Student Email"
                variant="outlined"
                value={studentEmail}
                onChange={(e) => setStudentEmail(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                variant="outlined"
                multiline
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="outlined"
                color="secondary"
                fullWidth
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
}

export default VerifyCertificate;
