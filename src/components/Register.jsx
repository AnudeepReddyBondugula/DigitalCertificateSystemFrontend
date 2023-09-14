import {Container, Paper, InputLabel, TextField, Button} from "@mui/material";
import { Link } from 'react-router-dom';
    const Register = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '100vh', backgroundColor: "grey"}}>
            <Container maxWidth="md">
                <Paper elevation={10} style={{ padding: '100px' }}>
                    <h1> Register </h1>
                    <br />
                    <br />
                    <form>
                        <div style={{ display: 'block', alignItems: 'center' }}>
                            <InputLabel htmlFor="username" style={{ marginRight: "8px" }}>Username or email</InputLabel>
                            <TextField id="username" fullWidth />
                        </div>
                        <br/>
                        <div style={{ display: 'block', alignItems: 'center' }}>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <TextField id="password" type="password" fullWidth />
                        </div><br/>
                        <div style={{ display: 'block', alignItems: 'center' }}>
                            <InputLabel htmlFor="rePassword">Re-Enter Password</InputLabel>
                            <TextField id="rePassword" type="password" fullWidth />
                        </div><br/>
                        <div style={{ display: 'block', alignItems: 'center' }}>
                            <InputLabel htmlFor="address">Public Address</InputLabel>
                            <TextField id="address" type="address" fullWidth />
                        </div><br/>
                        <div style={{ display: 'block', alignItems: 'center' }}>
                            <InputLabel htmlFor="aadhar">Aadhar Number</InputLabel>
                            <TextField id="aadhar" type="number" fullWidth />
                        </div><br/>
                        <Button variant="contained" color="primary">
                            Register
                        </Button>
                       <p> Already User?
                       <Link to="/login">Login</Link></p>
                    </form>
                </Paper>
            </Container>
    </div>
    )
    }
export default Register;