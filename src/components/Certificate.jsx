// Certificate.jsx
import React from 'react';
import { Typography, Grid} from '@mui/material';
import { dontOverflowText } from '../utils/prettyPrint';

const Certificate = ({ imageUrl, title, issuer, issuanceDate, expiryDate }) => {

  return (
    <Grid item style={{ width: "20rem", height : "20rem" ,margin: '1rem', backgroundColor : "white", padding: "1rem"}}>
      <img style={{width:"100%", height : "75%"}} src={'src/assets/images/IssueCertificateImage.gif'}></img>
      <Typography variant="h5">{dontOverflowText(title, 25)}</Typography>
      <Typography variant='body4'>{dontOverflowText(issuer, 20)}</Typography>
      <div style={{display: "flex", "justifyContent" : "space-between"}}>
      <Typography variant='body4'>Issued: {issuanceDate}</Typography>
      <Typography variant='body4'>Expires: {expiryDate}</Typography>
      </div>
    </Grid>
  );
};

export default Certificate;
