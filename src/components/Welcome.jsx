/* eslint-disable no-mixed-spaces-and-tabs */

//import {Container, Paper, Button } from '@mui/material';
import {Container, Button} from '@mui/material';
function Welcome() {
    return (
        <>
		<div style={{ textAlign:'center', backgroundColor: 'grey'}} >

            <h1 style={{fontSize:'50px', display : 'full'}}>Welcome to Digital Certificate System!!</h1>
        
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px'}}>
        <Container>
	  <div style={{width:'100%', height:'600px' ,padding:'10px',display:'flow',float:'left', backgroundColor: 'orange'}}>
		<p style={{fontSize : '40px'}}>Login for Users</p>
                    <Button variant="contained" color="primary" onClick={() => window.location.href = '/login'}>
                           Login
                     </Button>
                     &nbsp;&nbsp;&nbsp;&nbsp;
                     <Button variant="contained" color="primary" onClick={() => window.location.href = '/register'}>
                           Sign Up
                     </Button>
        </div>
        </Container>
        <Container>
	  <div style={{width:'100%', height:'600px',padding:'10px', display:'flow', float:'right',backgroundColor:'yellow' }}>
		<p style= {{ fontSize : '40px'}}>Login for Organisation</p>
                    <Button variant="contained" color="primary" onClick={() => window.location.href = '/login'}>
                           Login
                     </Button>
                     &nbsp;&nbsp;&nbsp;&nbsp;
                     <Button variant="contained" color="primary" onClick={() => window.location.href = '/Register'}>
                           register
                     </Button>
	  </div>
      </Container>

        </div>

	  </div>
        </>
    )
}

export default Welcome;