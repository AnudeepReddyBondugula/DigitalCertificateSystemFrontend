import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Menu, MenuItem } from '@mui/material';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function StudentDashboard() {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [responseData, setResponseData] = useState(undefined);
  useEffect(() => {
    const jwToken = sessionStorage.getItem('jwToken');
    if (!jwToken){
      navigate('/user/login');
      return;
    }

    const fetchData = async () =>{
      const response = await fetch("http://localhost:3000/user/dashboard", {
        method : "GET",
        headers : {
          "Content-Type" : "application/json",
          "Authorization" : sessionStorage.getItem('jwToken')
        }
      })

      setResponseData(await response.json());
    };
    fetchData()
    // .then(()=> alert('Got'));


  }, [navigate]);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    navigate('/user/profile');
  }
  

  const handleLogout = () => {
    // Implement logout logic here
    sessionStorage.removeItem('jwToken');
    navigate('/');
    return;
  };

  return (
    <div>
      {/* App Bar */}
      <AppBar position="static">
        <Toolbar>
          {/* Left Heading */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Student Dashboard
          </Typography>
          
          {/* Notifications and Profile Icons */}
          <IconButton color="inherit">
            <Badge color="error">
              <NotificationsIcon sx={{fontSize : 32}}/>
            </Badge>
          </IconButton>
          <IconButton
              size="large"
              edge="end"
              color="inherit"
              onClick={handleProfileClick}
              aria-label="profile"
            >
              <AccountCircleIcon sx={{fontSize : 32}} />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleProfileClose}
            >
              <MenuItem onClick={handleProfile}>Profile</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        </Toolbar>
      </AppBar>

      {/* Content */}
      <Container sx={{ mt: 4 }}>
        <Box display="flex" justifyContent="space-between">
          {/* Issue a Certificate */}
          <Paper elevation={3} sx={{ p: 2, width: '45%' }}>
          <Link to='/user/digilocker'>
            <Typography variant="h4" gutterBottom>
              Digi-Locker
            </Typography>
          </Link>
          </Paper>
        </Box>
      </Container>
    
    </div>
  );
}

export default StudentDashboard;
