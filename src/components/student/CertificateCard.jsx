/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const CertificateCard = ({ certificate }) => {
  const cardStyle = {
    backgroundColor: '#b8ba99', // Set the background color of the card
    marginBottom: '1px', // Add margin to separate cards
  };

  return (
    <Card variant="outlined" style={cardStyle}>
      <CardContent>
        <Typography variant="h5" component="div">
          Certificate: {certificate.name}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Certificate ID: {certificate.id}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Issued by: {certificate.organization}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Issued Date: {certificate.issueDate}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Expires in: {certificate.expiry}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CertificateCard;