import { Container, Typography, Button, Grid, Paper } from '@mui/material';
import {Link} from 'react-router-dom';

const Welcome = () => {
  return (
    <Container style={{
      position: "absolute",
      top : "40%",
      left : "50%",
      transform: "translate(-50%, -50%)"
    }}>
      <Paper elevation={3} style={{ padding: '20px', textAlign: 'center', width:'1100px', height:'300px'}}>
        <Typography variant="h3" gutterBottom>
          Welcome to Digital Certificate System
        </Typography>
        <br></br>
        <Typography variant="h5" paragraph style={{fontSize:'30px'}}>
          Are you a student or an organization?
        </Typography>
        <Grid container spacing={2} justifyContent="space-evenly">
          <Grid item xs={12} md={4}>
          <Link to="/user/login">
            <Button
              variant="contained"
              color="primary"
              fullWidth
              style={{ margin: '10px', top:'40px'}}
            >
              Student Login
            </Button>
            </Link>
          </Grid>
          <Grid item xs={12} md={4}>
          <Link to="/org/login">
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              style={{ margin: '10px', top:'40px'}}
              onClick={() => {
                // Handle organization login
              }}
            >
              Organization Login
            </Button>
          </Link>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Welcome;
