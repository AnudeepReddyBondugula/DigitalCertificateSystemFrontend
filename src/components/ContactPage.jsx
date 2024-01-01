import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Button, Toolbar, Typography} from "@mui/material";
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';


const ContactPage = () => {
  return (
    <div className="about-page">
      <AppBar position="static" style={{ flexGrow: 1, backgroundColor: '#24487A'}}>
        <Toolbar>
          <Typography style={{ flexGrow: 1}}>
            <WorkspacePremiumOutlinedIcon style={{fontSize:'40'}}/>
            <Button color="inherit" component={Link} to="/">
              <span style={{fontFamily:'Homizio', font:'Álvaro Thomáz', fontSize:'25px'}}>
                Digital Certificate System
              </span>
            </Button>
          </Typography>
          <Button color="inherit" component={Link} to="/" style={{ marginRight: '1rem' }}>Home</Button>
          <Button color="inherit" component={Link} to="/AboutPage" style={{ marginRight: '1rem' }}>About</Button>
          <Button color="inherit" component={Link} to="/ContactPage">Contact</Button>
          {/* Add more navigation buttons as needed */}
        </Toolbar>
      </AppBar>
      <div style={{ marginLeft: '20px', marginTop:'20px' }}>
        <p style={{fontWeight:'bold', fontSize:'25px'}}>Contact Page of Our Project</p>
        <p>
          Welcome to our project! This is a brief overview of what we're working on and what you can expect.
        </p>

        <h2>Project Details</h2>
        <p>
          Our project is focused on [insert a brief description of your project].
          We aim to [mention the goals and objectives].
        </p>

        <h2>Features</h2>
        <ul>
          <li>Feature 1: [Describe feature 1]</li>
          <li>Feature 2: [Describe feature 2]</li>
          {/* Add more features as needed */}
        </ul>

        <h2>Team</h2>
        <p>
          Meet the team behind the project:
        </p>
        <ul>
          <li>[Team Member 1]</li>
          <li>[Team Member 2]</li>
          {/* Add more team members as needed */}
        </ul>

        {/* Add more sections as needed, such as technologies used, project milestones, etc. */}

        <p>
          Thank you for your interest in our project. If you have any questions or feedback, feel free to [contact us].
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
