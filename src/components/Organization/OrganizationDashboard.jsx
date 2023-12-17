import { AppBar, Button, Toolbar, Typography, Avatar, Menu, MenuItem, Container, Grid, Card} from "@mui/material";
import { useState } from "react";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link, useNavigate } from "react-router-dom";


const styles = {
    gridStyle : {
        padding : "1rem",
        textAlign : "center"
    },

    containerStyle : {
        // backgroundColor : "#3498db", 
        padding : "1rem",
        paddingTop : "8rem",
        borderRadius : "1rem"
    }
}
function OrganizationDashboard() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleLogout = () => {
        handleClose();
        sessionStorage.removeItem("JWToken");
        sessionStorage.removeItem("role");
        navigate("/login");
    }

    const handleBalance = () => {
      handleClose();
      navigate("/balance");
    }
  return (
    <div style={{width : "100vw", height : "100vh", backgroundColor : "#eeeeee"}}>

    <AppBar>
    <Toolbar>
        <Typography variant="h5">Organization Dashboard</Typography>
        <NotificationsIcon style={{marginLeft: "auto"}}></NotificationsIcon>
        <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Avatar style={{margin: "0.5rem 1rem 0.5rem 1.5rem"}}/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleBalance}>Balance</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </Toolbar>
    </AppBar>
    <Container style={styles.containerStyle}>
        <Grid container spacing={2}>
                <Grid item xs={12} sm={6} style={styles.gridStyle}>
                <Link to={"/issue"}>
                <Card style={{display : "flex", alignItems : "center"}}>
                    <img src="src/assets/images/IssueCertificateImage.gif" style={{width : "10rem", padding : "1rem"}}></img>
                    <div>
                    <Typography variant='h3'>Issue</Typography>
                    <Typography variant="h5" paragraph>
                        Generate/Issue Digital Certificates
                    </Typography>
                    </div>
                </Card>
                </Link>
                </Grid>
                <Grid item xs={12} sm={6} style={styles.gridStyle}>
                <Link to={"/verify"}>
                <Card style={{display : "flex", alignItems : "center"}}>
                    <img src="src/assets/images/verifyCertificateImageGIF.gif" style={{width : "13.25rem"}}></img>
                    <div style={{marginLeft : "2rem"}}>
                    <Typography variant='h3'>Verify</Typography>
                    <Typography variant="h5" paragraph>
                        Verify Digital Certificates
                    </Typography>
                    </div>
                </Card>
                </Link>
                </Grid>
        </Grid>
    </Container>
    </div>
  );
}
export default OrganizationDashboard;
