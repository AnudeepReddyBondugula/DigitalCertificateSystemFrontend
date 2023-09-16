import Button from '@mui/material/Button';
import { Container, Paper, TextField, InputLabel} from '@mui/material';
import { Link } from 'react-router-dom';
const Login = () => {
    return(
    <div
    style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '100vh', 
    backgroundImage: 'https://static.vecteezy.com/system/resources/thumbnails/011/635/825/small/abstract-square-interface-modern-background-concept-fingerprint-digital-scanning-visual-security-system-authentication-login-vector.jpg'}}>
            <Container maxWidth="md">
                <Paper elevation={10} style={{ padding: '100px'}}>
                    <h1 style ={{fontFamily : "inherit"}}> Login </h1>
                    <br />
                    <br />
                    <form>
                        <div style={{ display: 'block', alignItems: 'center' }}>
                            <InputLabel htmlFor="username" style={{ marginRight: "8px" , fontFamily : "inherit"}}>Username or email</InputLabel>
                            <TextField id="username" fullWidth />
                        </div>
                        <br></br>
                        <div style={{ display: 'block', alignItems: 'center', fontFamily : "inherit" }}>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <TextField id="password" type="password" fullWidth />
                        </div><br></br>
                        <Button variant="contained" color="primary" onClick="./dashboard" >
                            Login
                        </Button>
                       <p style={{ fontFamily : "inherit"}}> New User?
                       <Link to="/register">Register</Link></p>
                    </form>
                </Paper>
            </Container>
        </div>
    );
  };
  
  export default Login;