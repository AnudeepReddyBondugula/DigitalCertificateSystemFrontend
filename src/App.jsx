import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Welcome from './components/Welcome'
import Register from './components/Register';
import Login from './components/Login';

import './App.css'

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Welcome/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
        </Routes>
      </Router>
    )
}

export default App
