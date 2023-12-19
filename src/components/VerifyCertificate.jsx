// VerifyCertificate.jsx
import { useEffect, useState } from 'react';
import { Container, Typography, TextField, Button, Snackbar, Alert, AppBar, Toolbar, MenuItem, Avatar, Menu, Stack, Paper } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Certificate from './Certificate';
import { useNavigate } from 'react-router-dom';
import { logoutAccount, verifyAndRedirect } from '../utils/authentication';
import { sendRequest } from '../Services/HttpProvider';

const styles = {
    gridStyle : {
        padding : "1rem",
        textAlign : "center"
    },

    containerStyle : {
        // backgroundColor : "#3498db", 
        padding : "1rem",
        paddingTop : "5rem",
        borderRadius : "1rem",
        paddingLeft : "5rem"

    },
	paperStyle : {
		padding : "1rem",
		marginTop : "20px",
	}
}

const VerifyCertificate = () => {
	const [certificateId, setCertificateId] = useState('');
	const [userId, setUserId] = useState('');
	const [verificationResult, setVerificationResult] = useState(false);
	const navigate = useNavigate();
	const [notify, setNotify] = useState(null);
	const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
	const [certificatesMetaData, setCertificatesMetaData] = useState([]);

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

	useEffect(() => {
		const func = async () => {
			
			
		}
		func();
    }, [])

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
	const handleVerify = async () => {
		const body = {
			userDetails : {
				"username" : userId,
				"certificateID" : certificateId
			}
		}
		const {status, responseBody} = await sendRequest('/verify', "POST", JSON.stringify(body))
		if (!(status >= 400)){
			const {listOfCertificatesMetaData} = responseBody;
			setCertificatesMetaData(listOfCertificatesMetaData);
			setVerificationResult(true);
		} else{
			setNotify({
				"severity" : "error",
				"title" : "Error ",
				"message" : responseBody.error
			})
		}
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
		<Container  style={{paddingTop : "100px"}}>
		<Typography variant="h4" align="center" gutterBottom>
			Verify Certificate
		</Typography>

		{/* Verification Form */}
		<form className='max-w-screen-md ml-auto mr-auto'>
			<TextField
			label="Username"
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
		{certificatesMetaData.length == 0 ? <>{ verificationResult && <Paper style={styles.paperStyle}>
			<Typography variant="h5"> No Certificates Available</Typography>
		</Paper>}</> : <Stack>
        {certificatesMetaData.map((certificate)=>{
          return (<Certificate
            key={certificate.certificateID}
            title={certificate.certificateMetaData.CertificateName}
            issuer={certificate.certificateMetaData.Issuer.organizationName}
            issuanceDate={certificate.certificateMetaData.IssueDate}
            expiryDate={certificate.certificateMetaData.ExpiryDate}
          />)
        })}
    </Stack>}
		</Container>
		</div>
	);
};

export default VerifyCertificate;
