import { AppBar, Button, Toolbar, Typography, Avatar, Menu, MenuItem, Container, Grid, Card, Snackbar, Alert} from "@mui/material";
import { useState, useEffect } from "react";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link, useNavigate } from "react-router-dom";
import { logoutAccount, verifyAndRedirect } from "../../utils/authentication";

const styles = {
	containerStyle : {
		paddingTop : "100px"
	}
}

function UserDashboard() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();
    const [notify, setNotify] = useState(null);

	useEffect(() => {
		const func = async () => {
			try {
				await verifyAndRedirect(navigate, null, "/login")
			} 
			catch (err) {
				setNotify(() => {
					return {
						severity: "error",
						title: "Error: ",
						message: err.message,
					};
				});
			}
		};
		func();
	}, [navigate]);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleLogout = () => {
        handleClose();
        logoutAccount(navigate);
    }
	const handleAlertClose = (e, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setNotify(null);
    };
  return (
	
    <div style={{width : "100vw", height : "100vh", backgroundColor : "#eeeeee"}}>
	{notify && (
                <Snackbar
                    open={!!notify.message}
                    autoHideDuration={3000}
                    onClose={handleAlertClose}>
                    <Alert
                        onClose={handleAlertClose}
                        variant="standard"
                        severity={notify.severity}
                        sx={{ width: "100%" }}>
                        <strong>{notify.title}</strong>
                        {notify.message}
                    </Alert>
                    </Snackbar>
            )}	
    <AppBar>
    <Toolbar>
        <Typography variant="h5">User Dashboard</Typography>
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
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </Toolbar>
    </AppBar>
    <Container style={styles.containerStyle}>
        <Grid container spacing={2}>
                <Grid item xs={12} sm={6} style={styles.gridStyle}>
                <Link to={"/digilocker"}>
                <Card style={{display : "flex", alignItems : "center"}}>
                    <img src="src/assets/images/DigiLockerGIF.gif" style={{width : "10rem"}}></img>
                    <div>
                    <Typography variant='h3'>DigiLocker</Typography>
                    <Typography variant="h5" paragraph>
                        Manage Your Digital Certificates
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
export default UserDashboard;
