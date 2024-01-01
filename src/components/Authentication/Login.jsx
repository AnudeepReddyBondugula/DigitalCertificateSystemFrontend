import React, { useEffect, useState } from "react";
import {
  AppBar,
  Button,
  Toolbar,
  TextField,
  Paper,
  Typography,
  Container,
  Snackbar,
  Alert,
} from "@mui/material";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import { Link, useNavigate } from "react-router-dom";
import { loginAccount, verifyAndRedirect } from "../../utils/authentication";

const styles = {
    bodyStyle: {
        backgroundColor: "#3498db", // Blue color
        minHeight: "100vh", // Make sure the background color covers the whole viewport height
        display: "flex",
        justifyContent: "center",
    },
    containerStyle: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
        borderRadius: "0.5rem",
        width: "100%",
        maxWidth: "600px", // Adjust the maximum width as needed
    },
    formStyle: {
        width: "100%",
        marginTop: "1rem",
        padding: "2rem 3rem",
    },
    inputStyle: {
        backgroundColor: "white",
        borderRadius: "0.5rem",
    },

    submitButtonStyle: {
        margin: "1rem 0 0.5rem",
        backgroundColor: "#2c3e50", // Darker blue for contrast
        color: "white",
        "&:hover": {
        backgroundColor: "#1c2833",
        },
    },

    linkStyle: {
        color: "#2980b9", // Blue color for the link
        textDecoration: "none",
        marginTop: "1rem",
    },
    appBarStyle:{
        backgroundColor : "#24487A",
    },
};

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [notify, setNotify] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
    const func = async () => {
        try {
        await verifyAndRedirect(navigate, "/dashboard");
        } catch (err) {
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

  const handleSubmit = async (e) => {
    try{
        e.preventDefault();
        const result = await loginAccount(email, password);
        setNotify({
            severity : result.returnValue ? "success" : "error",
            title : result.returnValue ? "Login Success: " : "Login Failed: ",
            message : result.returnValue ? result.message : result.error
        })
        if (result.returnValue){
            navigate("/dashboard");
        }
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
  }

  const handleAlertClose = (e, reason) => {
    if (reason === "clickaway") {
        return;
    }
    setNotify(null);
  };

  return (
    <div>
        <AppBar position="static" style={styles.appBarStyle}>
            <Toolbar>
                <Typography style={{ flexGrow: 1 }}>
                <Button color="inherit" component={Link} to="/">
                    <WorkspacePremiumOutlinedIcon style={{ fontSize: '40' }} />
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
            {notify && (
                <Snackbar
                    open={!!notify.message}
                    autoHideDuration={3000}
                    onClose={handleAlertClose}
                >
                    <Alert
                    onClose={handleAlertClose}
                    variant="standard"
                    severity={notify.severity}
                    sx={{ width: "100%" }}
                    >
                    <strong>{notify.title}</strong>
                    {notify.message}
                    </Alert>
                </Snackbar>
            )}

            <Container component="main" maxWidth="xs" style={styles.containerStyle}>
                <Paper elevation={3}>
                    <form style={styles.formStyle} onSubmit={handleSubmit}>
                        <Typography component="h1" variant="h5" style={{ textAlign: "center", marginBottom: "1rem" }}>
                            Login
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
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                            InputProps={{ style: styles.inputStyle }}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            style={styles.submitButtonStyle}>
                            Sign In
                        </Button>
                        <Typography
                            variant="body2"
                            style={{ textAlign: "center", marginTop: "1rem" }}>
                            Don&apos;t have an account?{" "}
                            <Link to="/signup" style={styles.linkStyle}>
                                Create an account
                            </Link>
                        </Typography> 
                    </form>
                </Paper>
            </Container>
        </div>
    </div>
  );
};

export default Login;
