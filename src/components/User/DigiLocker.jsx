import { AppBar, Button, Toolbar, Typography, Avatar, Menu, MenuItem, Container, Stack, Snackbar, Alert, Paper} from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Certificate from "../Certificate";
import { logoutAccount, verifyAndRedirect } from "../../utils/authentication";
import { sendRequest } from "../../Services/HttpProvider";

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
		marginTop : "10px"
	}
}

function DigiLocker() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();
    const [notify, setNotify] = useState(null);
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
			const {status, responseBody} = await sendRequest('/digilocker', "GET", null)
			if (!(status >= 400)){
				const {listOfCertificatesMetaData} = responseBody;
				setCertificatesMetaData(listOfCertificatesMetaData);
			} else{
				setNotify({
					"severity" : "error",
					"title" : "Error",
					"message" : responseBody.error
				})
			}
			
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
    {certificatesMetaData.length == 0 ?  <Paper style={styles.paperStyle}>
			<Typography variant="h5"> No Certificates Available</Typography>
		</Paper> : <Stack>
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
}
export default DigiLocker;
