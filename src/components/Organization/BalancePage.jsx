// BalancePage.jsx
import { useEffect, useState } from 'react';
import { Container, Typography, Grid, TextField, Button, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BalancePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("role") != "organization"){
      navigate("/dashboard");
    }
  });
    const [cryptoAddress, setCryptoAddress] = useState('');
    const [cryptoValue, setCryptoValue] = useState('');
    
    const [alert, setNotify] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
  
  const handleCryptoPayment = () => {
    // Replace this with your logic for processing crypto payments
    console.log(`Crypto Payment: Address - ${cryptoAddress}, Value - ${cryptoValue}`);
  };

  const [upiName, setUpiName] = useState('');
  const [upiAccount, setUpiAccount] = useState('');
  const [upiAmount, setUpiAmount] = useState('');

  const handleUpiPayment = () => {
    // Replace this with your logic for processing UPI payments
    console.log(`UPI Payment: Name - ${upiName}, Account - ${upiAccount}, Amount - ${upiAmount}`);
  };

  // Placeholder for total balance (replace with actual value)
  const totalBalance = 100;

  return (
    <div>
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
              <Typography variant="h4">{totalBalance} ETH</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default BalancePage;
