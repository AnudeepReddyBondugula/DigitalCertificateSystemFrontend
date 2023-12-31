import { Container, Typography, TextField, Button, Paper, CssBaseline } from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { issueCertificate } from '../../utils/contract-helper';

const IssueCertificate = () => {

  const navigate = useNavigate();
  useEffect(() => {
    if (!sessionStorage.getItem('jwToken')){
      navigate('/org/login');
      return;
    }
  }, [navigate])
  

  const [studentAddress, setStudentAddress] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [studentName, setStudentName] = useState('');
  const [certificateFile, setCertificateFile] = useState(null);
  const [issueDate, setIssueDate] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [certificatename, setCertificateName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('certificateFile', certificateFile);
    formData.append('student_address', studentAddress);
    formData.append('student_email', studentEmail);
    formData.append('student_name', studentName);
    formData.append('issue_date', issueDate);
    formData.append('expire_date', expireDate);
    formData.append('certificate_name', certificatename);
    // ! Enable at the time of deployment
    const response = await fetch('http://localhost:3000/org/mint', {
      method : "POST",
      headers : {
        'Authorization' : sessionStorage.getItem('jwToken')
      },
      body : formData
    });
    const metadata_cid = (await response.json()).metadata_cid;
    
    await issueCertificate(studentAddress, metadata_cid);
  };

  return (
    <Container maxWidth="md">
      <CssBaseline />
      <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Issue Certificate
        </Typography>
        <form onSubmit={handleSubmit} autoComplete='off'>
          <TextField
            label="Student Address"
            variant="outlined"
            fullWidth
            margin="normal"
            value={studentAddress}
            onChange={(e) => setStudentAddress(e.target.value)}
            required
          />
          <TextField
            label="Student Email"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            value={studentEmail}
            onChange={(e) => setStudentEmail(e.target.value)}
            required
          />
          <TextField
            label="Student Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            required
          />
          <TextField
            label="Certificate Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={certificatename}
            onChange={(e) => setCertificateName(e.target.value)}
            required
          />
          <TextField
            label="Issued Date"
            variant="outlined"
            fullWidth
            margin="normal"
            value={issueDate}
            onChange={(e) => setIssueDate(e.target.value)}
            required
          />
          <TextField
            label="Expire Date"
            variant="outlined"
            fullWidth
            margin="normal"
            value={expireDate}
            onChange={(e) => setExpireDate(e.target.value)}
          />
          <input
            type="file"
            accept=".pdf"
            onChange={(e) => setCertificateFile(e.target.files[0])}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: '20px' }}
          >
            Issue Certificate
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default IssueCertificate;
