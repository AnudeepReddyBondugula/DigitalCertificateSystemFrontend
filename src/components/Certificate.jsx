/* eslint-disable react/prop-types */
import { Typography, Paper} from '@mui/material';
import { dontOverflowText } from '../utils/prettyPrint';
import { Link } from 'react-router-dom';
const styles = {
	paperStyle : {
		"padding" : "1rem",
		"margin" : "10px"
	},

	divStyle : {
		display : "flex",
		justifyContent : "space-between"
	}
}

const Certificate = ({ title, issuer, issuanceDate, expiryDate }) => {
	const handleDownload = async () => {
		alert("Click on Download")
	}
  return (
    <Paper style={styles.paperStyle}>
		<div style={styles.divStyle}>
			<Typography variant="h5">{dontOverflowText(title, 30)}</Typography>
			<Link variant='body4' onClick={handleDownload}>Download</Link>
		</div>
		<Typography variant='body4'>{dontOverflowText(issuer, 20)}</Typography>
		<div style={styles.divStyle}>
		<Typography variant='body4'>Issued: {issuanceDate}</Typography>
		<Typography variant='body4'>Expires: {expiryDate}</Typography>
		</div>
    </Paper>
  );
};

export default Certificate;
