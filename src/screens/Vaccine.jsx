import { Box, Container } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  fetchVaccineDataByLocationThunk,
  fetchVaccineDataThunk,
} from '../app/store/thunks/vaccineThunk';
import DosesByDayChart from '../components/screens/vaccine/DosesByDayChart';
import VaccineOverview from '../components/screens/vaccine/Overview';
import ProvincesTable from '../components/screens/vaccine/ProvincesTable';
import TotalDosesByDayChart from '../components/screens/vaccine/TotalDosesByDayChart';

const VaccineScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVaccineDataThunk());
    dispatch(fetchVaccineDataByLocationThunk());
  }, [dispatch]);

  return (
    <Container sx={{ py: 4 }}>
      <Box>
        <VaccineOverview />
      </Box>
      <Box mt={4}>
        <DosesByDayChart />
      </Box>
      <Box mt={4}>
        <TotalDosesByDayChart />
      </Box>
      <Box mt={4}>
        <ProvincesTable />
      </Box>
    </Container>
  );
};

export default VaccineScreen;
