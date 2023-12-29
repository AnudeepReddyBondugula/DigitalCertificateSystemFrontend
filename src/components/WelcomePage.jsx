import { Container, Typography, Button, AppBar, Toolbar} from '@mui/material';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        minWidth : '100vw',
        backgroundColor: '#24487A', // Winter Ice Dark Blue
        color: '#fff', // White text color
      }}
    >
      {/* Top App Bar with About and Contact */}
      <AppBar style={{ background: 'transparent', boxShadow: 'none' }}>
        <Toolbar style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Typography variant="h5" style={{ flexGrow: 1 }}>
              <WorkspacePremiumOutlinedIcon style={{fontSize:'40'}}/>
            <Button color="inherit" component={Link} to="/">
              <span style={{fontFamily:'Homizio', font:'Álvaro Thomáz', fontSize:'25px'}}>
                Digital Certificate System
              </span>
            </Button>
          </Typography>
          <Button component={Link} to="/AboutPage" color="inherit" style={{ marginRight: '1rem' }}>
            About
          </Button>
          <Button component={Link} to="/ContactPage" color="inherit">
            Contact
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Typography variant="h4" align="center" gutterBottom>
        Welcome to Digital Certificate Generation and Verification
      </Typography>

      {/* Login and Signup Options */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <Button component={Link} to="/login" variant="contained" color="primary" style={{ marginRight: '1rem' }}>
          Login
        </Button>
        <Button component={Link} to="/signup" variant="contained" color="error">
          Sign Up
        </Button>
      </div>
    </Container>
  );
};

export default WelcomePage;
