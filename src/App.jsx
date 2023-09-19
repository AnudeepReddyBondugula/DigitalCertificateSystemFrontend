import { Route, Routes} from 'react-router-dom'
import Welcome from "./components/Welcome"
import StudentSignup from "./components/student/StudentSignup"
import StudentLogin from './components/student/StudentLogin'
import OrgSignup from './components/organization/OrgSignup';
import OrgLogin from './components/organization/OrgLogin';
import StudentDashboard from './components/student/StudentDashboard';
import OrgDashboard from './components/organization/OrgDashboard'
import IssueCertificate from './components/organization/IssueCertificate'
import VerifyCertificate from './components/organization/VerifyCertificate'
import DigiLocker from './components/student/DigiLocker';
//import PageNotFound from './components/PageNotFound';
import Notifications from './components/student/Notifications';
//import RequestNotifications from './components/student/RequestNotifications';
export default function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Welcome/>}/>
				<Route path='/user/login' element={<StudentLogin/>} />
				<Route path='/user/signup' element={<StudentSignup/>} />
				<Route path='/user/dashboard' element={<StudentDashboard/>} />
				<Route path='/user/digilocker' element={<DigiLocker/>} />
				<Route path='/org/login' element={<OrgLogin/>} />
				<Route path='/org/signup' element={<OrgSignup/>} />
				<Route path='/org/dashboard' element={<OrgDashboard/>} />
				<Route path='/dashboard' element={<StudentDashboard/>} />
				<Route path='/org/issue' element={<IssueCertificate/>} />
				<Route path='/org/verify' element={<VerifyCertificate/>} />
				<Route path='user/dashboard/notifications' element={<Notifications/>}/>
			</Routes>
		</div>
	)
}
