/* eslint-disable no-mixed-spaces-and-tabs */

//import {Container, Paper, Button } from '@mui/material';
import './Welcome.css';
import {Container, Button} from '@mui/material';
function Welcome() {
    return (
        <>
		<div className='main' >

            <h1>Welcome to Digital Certificate System!!</h1>
        
        <div className='div'>
        <Container>
	  <div className='user'>
		<p style={{fontSize : '40px'}}>Login for Users</p>
                    <Button variant="contained" color="primary" onClick={() => window.location.href = '/login'}>
                           Login
                     </Button>
        </div>
        </Container>
        <Container>
	  <div className='org'>
		<p style= {{ fontSize : '40px'}}>Login for Organisation</p>
                    <Button variant="contained" color="primary" onClick={() => window.location.href = '/login'}>
                           Login
                     </Button>
	  </div>
      </Container>

        </div>

	  </div>
        </>
    )
}

export default Welcome;