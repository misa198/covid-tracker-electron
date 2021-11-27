import { Container } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchVaccineDataThunk } from '../app/store/thunks/vaccineThunk';
import VaccineOverview from '../components/screens/vaccine/Overview';

const Vaccine = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVaccineDataThunk());
  }, []);

  return (
    <Container sx={{ py: 4 }}>
      <VaccineOverview />
    </Container>
  );
};

export default Vaccine;
