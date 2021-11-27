import { Box, Container } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchVaccineDataThunk } from '../app/store/thunks/vaccineThunk';
import DosesByDayChart from '../components/screens/vaccine/DosesByDayChart';
import VaccineOverview from '../components/screens/vaccine/Overview';
import ProvincesTable from '../components/screens/vaccine/ProvincesTable';

const Vaccine = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVaccineDataThunk());
  }, []);

  return (
    <Container sx={{ py: 4 }}>
      <Box>
        <VaccineOverview />
      </Box>
      <Box mt={3}>
        <DosesByDayChart />
      </Box>
      <Box mt={3}>
        <ProvincesTable />
      </Box>
    </Container>
  );
};

export default Vaccine;
