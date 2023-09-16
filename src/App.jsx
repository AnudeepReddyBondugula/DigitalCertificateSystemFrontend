import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Welcome from './components/Welcome'
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

import './App.css'

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Welcome/>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/Login/Dashboard' element={<Dashboard/>}></Route>
        </Routes>
      </Router>
    )
}

export default App

