import { Box, Container } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCovidVnExpressDataByDayThunk } from '../app/store/thunks/homeThunks';
import NewEpidemicOverview from '../components/screens/home/NewEpidemicOverview';
import HomeOverview from '../components/screens/home/Overview';
import VietnamCasesByDayChart from '../components/screens/home/VietnamCasesByDayChart';

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCovidVnExpressDataByDayThunk());
  }, [dispatch]);

  return (
    <Box sx={{ width: '100%', py: 4 }}>
      <Container>
        <Box>
          <HomeOverview />
        </Box>
        <Box mt={4}>
          <NewEpidemicOverview />
        </Box>
        <Box mt={4}>
          <VietnamCasesByDayChart />
        </Box>
      </Container>
    </Box>
  );
};

export default HomeScreen;
