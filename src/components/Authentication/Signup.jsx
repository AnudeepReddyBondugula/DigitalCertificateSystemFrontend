// LoginOrganization.jsx
import { useEffect, useState } from 'react';
import { AppBar, Toolbar, TextField, Button, Paper, Typography, Container, Alert, Snackbar, InputLabel, FormControl, Select, MenuItem} from '@mui/material';
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import { Link, useNavigate } from 'react-router-dom';
import { createAccount, verifyToken } from '../../utils/authentication';

const styles = {
    bodyStyle : {
        backgroundColor: '#3498db', // Blue color
        minHeight: '100vh', // Make sure the background color covers the whole viewport height
        display: 'flex',
        justifyContent: 'center',
      },
      
      containerStyle : {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1rem',
        // backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: '0.5rem',
        width: '100%',
        maxWidth: '600px', // Adjust the maximum width as needed
      },
      
      formStyle : {
        width: '100%',
        marginTop: '1rem',
        padding : '1rem 3rem'
      },
      
      inputStyle : {
        backgroundColor: 'white',
        borderRadius: '0.5rem',
      },
      
      submitButtonStyle : {
        margin: '1rem 0 0.5rem',
        backgroundColor: '#2c3e50', // Darker blue for contrast
        color: 'white',
        '&:hover': {
          backgroundColor: '#1c2833',
           // Darker shade on hover
        },
      },
      
      linkStyle : {
        color: '#2980b9', // Blue color for the link
        textDecoration: 'none',
        marginTop: '1rem',
      },
    appBarStyle:{
        backgroundColor : "#24487A",
    },
}



const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [role, setRole] = useState('user');

  const [aadharNumber, setAadharNumber] = useState(''); // Only for User
  const [organizationName, setOrganizationName] = useState(''); // Only for Organization

  const [retypePassword, setReTypePassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  
    useEffect(() => {
        const func = async () => {
            try {
                if (await verifyToken()) {
                    navigate("/dashboard");
                }
                else sessionStorage.removeItem("jwToken");
            } catch (err) {
                setError(() => {
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await createAccount({
                username : email,
                password,
                retypePassword,
                role,
                aadharNumber,
                organizationName,
                fullName
            })
            navigate("/login");
        }catch (err){
            setError(()=>{
                return {
                    severity : 'error',
                    title : "Error: ",
                    message : err.message
                }
            });
        }  
    };

  const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setError(null);
  };


  return (
    <div>
      <AppBar position="static" style={styles.appBarStyle}>
        <Toolbar>
        <Typography style={{ flexGrow: 1 }}>
          <Button color="inherit" component={Link} to="/">
          <WorkspacePremiumOutlinedIcon style={{ fontSize: '40' }}/>
            <span style={{ fontFamily: 'Homizio', font: 'Álvaro Thomáz', fontSize: '25px' }}>
              Digital Certificate System
            </span>
          </Button>
          </Typography>
          <Button color="inherit" component={Link} to="/" style={{ marginRight: '1rem' }}>Home</Button>
          <Button color="inherit" component={Link} to="/AboutPage" style={{ marginRight: '1rem' }}>About</Button>
          <Button color="inherit" component={Link} to="/ContactPage">Contact</Button>
        </Toolbar>
      </AppBar>
      <div style={styles.bodyStyle}>
      {error && <Snackbar open={!!error.message} autoHideDuration={3000} onClose={handleAlertClose}>
          <Alert onClose={handleAlertClose} variant='standard' severity={error.severity} sx={{ width: '100%' }}>
      <strong>{error.title}</strong>
            {error.message}
          </Alert>
        </Snackbar>}
        <Container component="main" maxWidth="xs" style={styles.containerStyle}>
          <Paper elevation={3}>
            <form style={styles.formStyle} onSubmit={handleSubmit}>
            <Typography component="h1" variant="h5" style={{ textAlign: 'center', marginBottom: '1rem' }}>
              Create Account
            </Typography>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{ style: styles.inputStyle }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="fullName"
                label="Full Name"
                name="name"
                autoComplete="name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                InputProps={{ style: styles.inputStyle }}
              />
              <FormControl fullWidth variant="outlined" margin="normal">
                  <InputLabel id="role-label" style={styles.inputStyle}>Role</InputLabel>
                  <Select
                      labelId="role-label"
                      label="Role"
                      name="role"
                      value={role}
                      onChange={(e)=>setRole(e.target.value)}
                  >
                      <MenuItem value="user">User</MenuItem>
                      <MenuItem value="organization">Organization</MenuItem>
                  </Select>
              </FormControl>
              {role == "user" ? <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="aadharNumber"
                label="Aadahar Number"
                name="aadharNumber"
                autoComplete="aadharNumber"
                value={aadharNumber}
                onChange={(e) => setAadharNumber(e.target.value)}
                InputProps={{ style: styles.inputStyle }}
              /> : <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="organizationName"
                label="Organization Name"
                name="organizationName"
                autoComplete="organizationName"
                value={organizationName}
                onChange={(e) => setOrganizationName(e.target.value)}
                InputProps={{ style: styles.inputStyle }}
              />}
              
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{ style: styles.inputStyle }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="ReTypePassword"
                label="Retype Password"
                type="password"
                id="reTypepassword"
                autoComplete="current-password"
                value={retypePassword}
                onChange={(e) => setReTypePassword(e.target.value)}
                InputProps={{ style: styles.inputStyle }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={styles.submitButtonStyle}
              >
                Sign Up
              </Button>
              <Typography variant="body2" style={{ textAlign: 'center', marginTop: '1rem' }}>
                  Aldready have an account?{' '}
              <Link to="/login" style={styles.linkStyle}>
                Login
              </Link>
            </Typography>
            </form>
          </Paper>
        </Container>
      </div>
    </div>
  );
};

export default Signup;
