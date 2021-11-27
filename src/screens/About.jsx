import { Box, Container } from '@mui/material';
import Overview from '../components/screens/about/Overview';

const AboutScreen = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Box>
        <Overview />
      </Box>
    </Container>
  );
};

export default AboutScreen;
