import Paper from '@mui/material/Paper';
import CertificateCard from './CertificateCard'; // Create CertificateCard component separately

const certificates = [
  {
    id: '-',
    name: '-',
    organization: '-',
    issueDate: '-',
    expiry: '-'
  },
  {
    id: '-',
    name: '-',
    organization: '-',
    issueDate: '-',
    expiry: '-'
  },
  {
    id: '-',
    name: '-',
    organization: '-',
    issueDate: '-',
    expiry: '-'
  }
  // Add more certificate objects as needed
];

const CertificatePage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Paper elevation={3} style={{ padding: '16px', width: '80%' , backgroundColor: "grey"}}>
        <h1 style={{ textAlign: 'center' }}>My Certificates</h1>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {certificates.map((certificate) => (
            <li key={certificate.id}>
              <CertificateCard certificate={certificate} />
            </li>
          ))}
        </ul>
      </Paper>
    </div>
  );
};

export default CertificatePage;