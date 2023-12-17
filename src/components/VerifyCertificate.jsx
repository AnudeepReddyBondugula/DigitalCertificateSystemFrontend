// VerifyCertificate.jsx
import { useState } from 'react';
import { Container, Typography, TextField, Button, Card, CardContent } from '@mui/material';

const VerifyCertificate = () => {
  const [certificateId, setCertificateId] = useState('');
  const [userId, setUserId] = useState('');
  const [verificationResult, setVerificationResult] = useState(null);

  const handleVerify = () => {
    // Replace this logic with your actual verification logic
    // For this example, assume verification is successful if both fields are non-empty
    const isVerified = certificateId.trim() !== '' && userId.trim() !== '';

    // Set the verification result
    setVerificationResult(isVerified ? 'Certificate is valid!' : 'Certificate verification failed.');
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Verify Certificate
      </Typography>

      {/* Verification Form */}
      <form>
        <TextField
          label="Certificate ID"
          variant="outlined"
          fullWidth
          margin="normal"
          value={certificateId}
          onChange={(e) => setCertificateId(e.target.value)}
        />
        <TextField
          label="User ID"
          variant="outlined"
          fullWidth
          margin="normal"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleVerify} style={{ marginTop: '1rem' }}>
          Verify
        </Button>
      </form>

      {/* Verification Result */}
      {verificationResult && (
        <Card style={{ marginTop: '2rem' }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Verification Result
            </Typography>
            <Typography>{verificationResult}</Typography>
          </CardContent>
        </Card>
      )}
    </Container>
  );
};

export default VerifyCertificate;
