import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const Certificates = () => {
  const [certificateData, setCertificateData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/getCertificates", {
          method: "GET",
          headers: {
            authorization: sessionStorage.getItem("jwToken"),
          },
        });
        setCertificateData(await response.json());
      } catch (error) {
        console.error("Error fetching certificate data:", error);
      }
    };

    fetchData();
  }, []);

  const downloadCertificate = async (cid) => {
    const response = await fetch("http://localhost:3000/downloadCertificate", {
      method: "POST",
      headers: {
        authorization: sessionStorage.getItem("jwToken"),
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({ certificate_cid: cid }),
    });

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "certificate.pdf";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        My Certificates
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Issued By</TableCell>
              <TableCell>Issued Date</TableCell>
              <TableCell>Expires In</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {certificateData.map((certificate, index) => (
              <TableRow
                key={index}
                onClick={() =>
                  downloadCertificate(certificate.certificate_cid)
                }>
                <TableCell>{certificate.certificate_name}</TableCell>
                <TableCell>{certificate.issuedBy}</TableCell>
                <TableCell>{certificate.issuedDate}</TableCell>
                <TableCell>{certificate.expireDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Certificates;
