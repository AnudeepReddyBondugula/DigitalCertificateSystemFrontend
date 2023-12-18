import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import Login from "./components/Authentication/Login";
import Signup from "./components/Authentication/SignUp";
import Dashboard from "./components/Dashboard";
import DigiLocker from "./components/User/DigiLocker";
import VerifyCertificate from "./components/VerifyCertificate";
import IssueCertificate from "./components/Organization/IssueCertificate";
import BalancePage from "./components/Organization/BalancePage";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/digilocker" element={<DigiLocker/>}></Route>
        <Route path="/verify" element={<VerifyCertificate/>}></Route>
        <Route path="/issue" element={<IssueCertificate/>}></Route>
        <Route path="/balance" element={<BalancePage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}