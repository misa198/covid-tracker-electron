import { Container } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchKompaWorldwideCasesThunk } from '../app/store/thunks/worldwideThunk';
import WorldwideOverview from '../components/screens/worldwide/Overview';

const Worldwide = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchKompaWorldwideCasesThunk());
  }, [dispatch]);

  return (
    <Container sx={{ py: 4 }}>
      <WorldwideOverview />
    </Container>
  );
};

export default Worldwide;
