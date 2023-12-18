// VerifyCertificate.jsx
import { useEffect, useState } from 'react';
import { Container, Typography, TextField, Button, Card, CardContent, Snackbar, Alert, AppBar, Toolbar, MenuItem, Avatar, Menu } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

import { useNavigate } from 'react-router-dom';
import { logoutAccount, verifyAndRedirect } from '../utils/authentication';

const VerifyCertificate = () => {
	const [certificateId, setCertificateId] = useState('');
	const [userId, setUserId] = useState('');
	const [verificationResult, setVerificationResult] = useState(null);
	const navigate = useNavigate();
	const [notify, setNotify] = useState(null);
	const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);


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

	const handleAlertClose = (e, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setNotify(null);
	};

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
	const handleVerify = () => {
		// Replace this logic with your actual verification logic
		// For this example, assume verification is successful if both fields are non-empty
		const isVerified = certificateId.trim() !== '' && userId.trim() !== '';

		// Set the verification result
		setVerificationResult(isVerified ? 'Certificate is valid!' : 'Certificate verification failed.');
	};

	return (
		<div style={{maxWidth : "100vw", height : "100%", backgroundColor : "#eeeeee", padding: "auto"}}>
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
        {/* <Typography variant="h5">Verify</Typography> */}
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
		<Container maxWidth="sm" style={{paddingTop : "100px"}}>
		<Typography variant="h4" align="center" gutterBottom>
			Verify Certificate
		</Typography>

		{/* Verification Form */}
		<form>
			<TextField
			label="User ID"
			variant="outlined"
			fullWidth
			margin="normal"
			value={userId}
			onChange={(e) => setUserId(e.target.value)}
			/>
			<TextField
			label="Certificate ID"
			variant="outlined"
			fullWidth
			margin="normal"
			value={certificateId}
			onChange={(e) => setCertificateId(e.target.value)}
			/>
			<Button variant="contained" color="primary" onClick={handleVerify} style={{ marginTop: '1rem' }}>
			Verify
			</Button>
		</form>

		{/* Verification Result */}
		{verificationResult && (
			<Card style={{ marginTop: '2rem' }}>
			<CardContent>
				<Typography variant="h6" gutterBottom>
				Verification Result
				</Typography>
				<Typography>{verificationResult}</Typography>
			</CardContent>
			</Card>
		)}
		</Container>
		</div>
	);
};

export default VerifyCertificate;
