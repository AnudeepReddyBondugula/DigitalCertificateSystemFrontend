import { AppBar, Button, Toolbar, Typography, Avatar, Menu, MenuItem, Container, Grid, Snackbar, Alert} from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Certificate from "../Certificate";
import { logoutAccount, verifyAndRedirect } from "../../utils/authentication";

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

    }
}

const certificatesData = [
  {
    id: 1,
    imageUrl: 'src/assets/images/DigiLockerGIF.gif',
    title: 'BlockChain Essentials',
    issuer: 'Anurag University',
    issuanceDate: '01-01-2022',
    expiryDate: '01-01-2023',
  },
  {
    id: 2,
    imageUrl: 'src/assets/images/DigiLockerGIF.gif',
    title: 'Certificate For AWS Cloud Essentials',
    issuer: 'Organization A',
    issuanceDate: '01-01-2022',
    expiryDate: '01-01-2023',
  },
  {
    id: 3,
    imageUrl: 'src/assets/images/DigiLockerGIF.gif',
    title: 'Certificate 1.....jghfgfg',
    issuer: 'Organization A',
    issuanceDate: '01-01-2022',
    expiryDate: '01-01-2023',
  },
  {
    id: 4,
    imageUrl: 'src/assets/images/DigiLockerGIF.gif',
    title: 'Certificate 1',
    issuer: 'Organization A',
    issuanceDate: '01-01-2022',
    expiryDate: '01-01-2023',
  },
  {
    id: 4,
    imageUrl: 'src/assets/images/DigiLockerGIF.gif',
    title: 'Certificate 1',
    issuer: 'Organization A',
    issuanceDate: '01-01-2022',
    expiryDate: '01-01-2023',
  },
  {
    id: 4,
    imageUrl: 'src/assets/images/DigiLockerGIF.gif',
    title: 'Certificate 1',
    issuer: 'Organization A',
    issuanceDate: '01-01-2022',
    expiryDate: '01-01-2023',
  },
  {
    id: 4,
    imageUrl: 'src/assets/images/DigiLockerGIF.gif',
    title: 'Certificate 1',
    issuer: 'Organization A',
    issuanceDate: '01-01-2022',
    expiryDate: '01-01-2023',
  },
  {
    id: 4,
    imageUrl: 'src/assets/images/DigiLockerGIF.gif',
    title: 'Certificate 1',
    issuer: 'Organization A',
    issuanceDate: '01-01-2022',
    expiryDate: '01-01-2023',
  },
  // Add more certificate data as needed
];

function DigiLocker() {
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
        <Typography variant="h5">DigiLocker</Typography>
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
    <Grid container>
        {certificatesData.map((certificate)=>{
          return (<Certificate
            key={certificate.id}
            imageUrl={certificate.imageUrl}
            title={certificate.title}
            issuer={certificate.issuer}
            issuanceDate={certificate.issuanceDate}
            expiryDate={certificate.expiryDate}
          />)
        })}
    </Grid>
    </Container>
    </div>

  );
}
export default DigiLocker;
