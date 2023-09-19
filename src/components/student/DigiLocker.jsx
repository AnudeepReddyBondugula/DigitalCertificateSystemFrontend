import CertificateList from './Certificate';

const App = () => {
  // Sample list of certificates
  const certificates = [
    { title: 'Certificate 1' },
    { title: 'Certificate 2' },
    { title: 'Certificate 3' },
    // Add more certificates as needed
  ];

  return (
    <div>
      <CertificateList certificates={certificates} />
    </div>
  );
};

export default App;