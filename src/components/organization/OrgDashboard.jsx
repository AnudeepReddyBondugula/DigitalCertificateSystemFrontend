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

function OrganizationDashboard() {

  const navigate = useNavigate();
  useEffect(() => {
    const jwToken = sessionStorage.getItem('jwToken');
    if (!jwToken){
      navigate('/org/login');
      return;
    }
  }, [navigate]);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setAnchorEl(null);
  };

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
            Organization Dashboard
          </Typography>
          
          {/* Notifications and Profile Icons */}
          <IconButton color="inherit">
            <Badge badgeContent={5} color="error">
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
              <MenuItem onClick={handleProfileClose}><Link to='/'>Profile</Link></MenuItem>
              <MenuItem onClick={handleLogout}><Link to='/org/login'>Logout</Link></MenuItem>
            </Menu>
        </Toolbar>
      </AppBar>

      {/* Content */}
      <Container sx={{ mt: 4 }}>
        <Box display="flex" justifyContent="space-between">
          {/* Issue a Certificate */}
          <Paper elevation={3} sx={{ p: 2, width: '45%' }}>
          <Link to='/org/issue'>
            <Typography variant="h4" gutterBottom>
              Issue a Certificate
            </Typography>
          </Link>
            {/* Add your content for issuing a certificate here */}
          </Paper>

          {/* Verify a Certificate */}
          <Paper elevation={3} sx={{ p: 2, width: '45%' }}>
          <Link to='/org/verify'>
            <Typography variant="h4" gutterBottom style={{color:'blue'}}>
              Verify a Certificate
            </Typography>
          </Link>
            {/* Add your content for verifying a certificate here */}
          </Paper>
        </Box>
      </Container>
    </div>
  );
}

export default OrganizationDashboard;
