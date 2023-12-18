// IssueCertificate.jsx
import { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, Card, CardContent, Snackbar, Alert, AppBar, Toolbar, MenuItem, Avatar, Menu } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useNavigate } from 'react-router-dom';
import { verifyAndRedirect, logoutAccount } from '../../utils/authentication';

const IssueCertificate = () => {
	const [certificateTitle, setCertificateTitle] = useState('');
	const [candidateUsername, setCandidateUsername] = useState('');
	const [issuedDate, setIssuedDate] = useState((new Date()).toISOString());
	const [expiryDate, setExpiryDate] = useState('');
	const [pdfFile, setPdfFile] = useState(null);
	const [issueResult, setIssueResult] = useState(null);
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

  const handleIssueCertificate = () => {
    // Replace this logic with your actual certificate issuance logic
    // For this example, assume issuance is successful if all fields are non-empty
    const isIssued =
      certificateTitle.trim() !== '' &&
      candidateUsername.trim() !== '' &&
      issuedDate.trim() !== '' &&
      expiryDate.trim() !== '' &&
      pdfFile !== null;

    // Set the issuance result
    setIssueResult(isIssued ? 'Certificate issued successfully!' : 'Failed to issue certificate.');
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
			<Typography variant="h5">Issue Certificate</Typography>
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
			MenuListProps={{'aria-labelledby': 'basic-button',}}>
				<MenuItem onClick={handleClose}>Profile</MenuItem>
				<MenuItem onClick={handleClose}>My account</MenuItem>
				<MenuItem onClick={handleLogout}>Logout</MenuItem>
			</Menu>
		</Toolbar>
	</AppBar>
    <Container maxWidth="sm" style={{backgroundColor : "white", marginTop : "100px",padding: "20px", borderRadius : "8px"}}>
      <Typography variant="h4" align="center" gutterBottom>
        Issue Certificate
      </Typography>

      {/* Certificate Issue Form */}
      <form>
        <TextField
          label="Certificate Title"
          variant="outlined"
          fullWidth
          margin="normal"
          value={certificateTitle}
          onChange={(e) => setCertificateTitle(e.target.value)}
        />
        <TextField
          label="Candidate Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={candidateUsername}
          onChange={(e) => setCandidateUsername(e.target.value)}
        />
        <TextField
          label="Issued Date"
          type="date"
          variant="outlined"
          fullWidth
          margin="normal"
          value={issuedDate}
          onChange={(e) => setIssuedDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="Expiry Date"
          type="date"
          variant="outlined"
          fullWidth
          margin="normal"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setPdfFile(e.target.files[0])}
          style={{ margin: '1rem'}}
        />
        <br></br>
        <Button variant="contained" color="primary" onClick={handleIssueCertificate}>
          Issue Certificate
        </Button>
      </form>

      {/* Certificate Issue Result */}
      {issueResult && (
        <Card style={{ marginTop: '2rem' }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Issue Result
            </Typography>
            <Typography>{issueResult}</Typography>
          </CardContent>
        </Card>
      )}
    </Container>
    </div>
  );
};

export default IssueCertificate;
