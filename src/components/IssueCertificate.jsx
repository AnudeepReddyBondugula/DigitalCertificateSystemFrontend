// IssueCertificate.jsx
import { useState } from 'react';
import { Container, Typography, TextField, Button, Card, CardContent } from '@mui/material';

const IssueCertificate = () => {
  const [certificateTitle, setCertificateTitle] = useState('');
  const [candidateUsername, setCandidateUsername] = useState('');
  const [issuedDate, setIssuedDate] = useState((new Date()).toISOString());
  const [expiryDate, setExpiryDate] = useState('');
  const [pdfFile, setPdfFile] = useState(null);
  const [issueResult, setIssueResult] = useState(null);

  const handleIssueCertificate = () => {
    // Replace this logic with your actual certificate issuance logic
    // For this example, assume issuance is successful if all fields are non-empty
    const isIssued =
      certificateTitle.trim() !== '' &&
      candidateUsername.trim() !== '' &&
      issuedDate.trim() !== '' &&
      expiryDate.trim() !== '' &&
      pdfFile !== null;

    // Set the issuance result
    setIssueResult(isIssued ? 'Certificate issued successfully!' : 'Failed to issue certificate.');
  };

  return (
    <Container maxWidth="sm" style={{backgroundColor : "white", marginTop : "3rem", padding : "2rem", borderRadius : "8px"}}>
      <Typography variant="h4" align="center" gutterBottom>
        Issue Certificate
      </Typography>

      {/* Certificate Issue Form */}
      <form>
        <TextField
          label="Certificate Title"
          variant="outlined"
          fullWidth
          margin="normal"
          value={certificateTitle}
          onChange={(e) => setCertificateTitle(e.target.value)}
        />
        <TextField
          label="Candidate Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={candidateUsername}
          onChange={(e) => setCandidateUsername(e.target.value)}
        />
        <TextField
          label="Issued Date"
          type="date"
          variant="outlined"
          fullWidth
          margin="normal"
          value={issuedDate}
          onChange={(e) => setIssuedDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="Expiry Date"
          type="date"
          variant="outlined"
          fullWidth
          margin="normal"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setPdfFile(e.target.files[0])}
          style={{ margin: '1rem'}}
        />
        <br></br>
        <Button variant="contained" color="primary" onClick={handleIssueCertificate}>
          Issue Certificate
        </Button>
      </form>

      {/* Certificate Issue Result */}
      {issueResult && (
        <Card style={{ marginTop: '2rem' }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Issue Result
            </Typography>
            <Typography>{issueResult}</Typography>
          </CardContent>
        </Card>
      )}
    </Container>
  );
};

export default IssueCertificate;
