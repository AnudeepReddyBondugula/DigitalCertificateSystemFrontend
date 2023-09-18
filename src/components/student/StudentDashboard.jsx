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
import { useState } from 'react';

function StudentDashboard() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Implement logout logic here
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
              <MenuItem onClick={handleLogout}><Link to='/user/login'>Logout</Link></MenuItem>
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
