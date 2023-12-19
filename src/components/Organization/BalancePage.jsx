// BalancePage.jsx
import { useEffect, useState } from 'react';
import { Container, Typography, TextField, Button, Card, CardContent, Snackbar, Alert, AppBar, Toolbar, MenuItem, Avatar, Menu, Grid } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useNavigate } from 'react-router-dom';
import { verifyAndRedirect, logoutAccount } from '../../utils/authentication';
import { fetchBalance, sendEther } from '../../utils/blockchainHelper';

const BalancePage = () => {
  const navigate = useNavigate();

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
    const [cryptoAddress, setCryptoAddress] = useState(JSON.parse(sessionStorage.getItem("details")).walletAddress);
    const [cryptoValue, setCryptoValue] = useState('');

    const [notify, setNotify] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

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

    const getBalance = async (e) => {
      e.preventDefault();
      const newBalance = await fetchBalance(cryptoAddress);
      setBalance(newBalance);
    }
  
  const handleCryptoPayment = () => {
    // Replace this with your logic for processing crypto payments
    console.log(`Crypto Payment: Address - ${cryptoAddress}, Value - ${cryptoValue}`);
    sendEther(cryptoAddress, cryptoValue)
  };

  const [upiName, setUpiName] = useState('');
  const [upiAccount, setUpiAccount] = useState('');
  const [upiAmount, setUpiAmount] = useState('');
  const [balance, setBalance] = useState("--");

  const handleUpiPayment = () => {
    // Replace this with your logic for processing UPI payments
    console.log(`UPI Payment: Name - ${upiName}, Account - ${upiAccount}, Amount - ${upiAmount}`);
  };

  return (
    <div>
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
			{/* <Typography variant="h5">Issue Certificate</Typography> */}
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
  <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Balance Page
      </Typography>

      <Grid container spacing={2}>
        {/* Left Form */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Pay Through Crypto
              </Typography>
              <TextField
                label="Address"
                variant="outlined"
                fullWidth
                margin="normal"
                value={cryptoAddress}
                onChange={(e) => setCryptoAddress(e.target.value)}
              />
              <TextField
                label="Value"
                variant="outlined"
                fullWidth
                margin="normal"
                value={cryptoValue}
                onChange={(e) => setCryptoValue(e.target.value)}
              />
              <Button variant="contained" color="primary" onClick={handleCryptoPayment}>
                Pay
              </Button>
            </CardContent>
          </Card>

          <Card style={{ marginTop: '1rem' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Pay Through UPI
              </Typography>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={upiName}
                onChange={(e) => setUpiName(e.target.value)}
              />
              <TextField
                label="Account"
                variant="outlined"
                fullWidth
                margin="normal"
                value={upiAccount}
                onChange={(e) => setUpiAccount(e.target.value)}
              />
              <TextField
                label="Amount"
                variant="outlined"
                fullWidth
                margin="normal"
                value={upiAmount}
                onChange={(e) => setUpiAmount(e.target.value)}
              />
              <Button variant="contained" color="primary" onClick={handleUpiPayment}>
                Pay
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Right Total Balance */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Total Balance
              </Typography>
              <Typography variant="h4">{balance} ETH</Typography>
              <Button variant='contained' onClick={getBalance}>getBalance</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
  </Container>
    </div>

  );
};

export default BalancePage;
