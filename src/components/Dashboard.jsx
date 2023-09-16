import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Container, Paper} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu'; // Import the Menu component
import MenuItem from '@mui/material/MenuItem'; // Import the MenuItem component
import { Link } from 'react-router-dom'; // Import the Link component for hyperlinks

export default function Dashboard() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>


          {/* Profile Image */}
          <Avatar 
          alt="profile" 
          src="./components/profile.jpg"
          color="inherit"
          aria-controls="hyperlinks-menu"
          aria-haspopup="true"
          onClick={handleMenuClick}
          >
            Profile
            </Avatar>
          <Menu
            id="hyperlinks-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem>
              <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
                Profile
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/settings" style={{ textDecoration: 'none', color: 'inherit' }}>
                Settings
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/logout" style={{ textDecoration: 'none', color: 'inherit' }}>
                Logout
              </Link>
            </MenuItem>
            {/* Add more hyperlinks as needed */}
          </Menu>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
          <Paper elevation={10} sx={{ flexGrow: 1 }} style={{ padding: '100px'}}>
              <h2>Welcome to the Dashboard</h2>
            </Paper>
          </Container>
    </Box>
  );
}