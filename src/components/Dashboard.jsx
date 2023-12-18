import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { verifyAndRedirect } from '../utils/authentication';
import UserDashboard from './User/UserDashboard';
import OrganizationDashboard from './Organization/OrganizationDashboard';
import { Snackbar, Alert } from '@mui/material';

const Dashboard = () => {
    const navigate = useNavigate();
    const role = sessionStorage.getItem("role");
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
  return (
    <>
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
    {role === "user" ? <UserDashboard/> : <OrganizationDashboard/>}
    </>
  )
}

export default Dashboard
