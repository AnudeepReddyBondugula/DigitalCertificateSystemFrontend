import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { verifyToken } from '../utils/authentication';
import UserDashboard from './User/UserDashboard';
import OrganizationDashboard from './Organization/OrganizationDashboard';

const Dashboard = () => {
    const navigate = useNavigate();
    const role = sessionStorage.getItem("role");
    // alert(role)
    useEffect(() => {
        const func = async () => {
            try {
                if (await verifyToken()) {
                    navigate("/dashboard");
                }
                else {
                    sessionStorage.removeItem("JWToken");
                    navigate("/login");
                }
                
            } catch (err) {
                sessionStorage.removeItem("JWToken");
                navigate("/login");
            }
        };
        func();
    }, [navigate]);
  return (
    <>
    {role === "user" ? <UserDashboard/> : <OrganizationDashboard/>}
    </>
  )
}

export default Dashboard
