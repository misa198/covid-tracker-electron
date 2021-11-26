import { Box, Container } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  fetchCovidVnExpressDataByDayThunk,
  fetchCovidVnExpressDataByLocationThunk,
  fetchCovidVnExpressDataByMapThunk,
} from '../app/store/thunks/homeThunks';
import NewEpidemicOverview from '../components/screens/home/NewEpidemicOverview';
import HomeOverview from '../components/screens/home/Overview';
import ProvinceByDayChart from '../components/screens/home/ProvinceByDayChart';
import ProvinceCharts from '../components/screens/home/ProvinceCharts';
import VietnamCasesByDayChart from '../components/screens/home/VietnamCasesByDayChart';

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCovidVnExpressDataByDayThunk());
    dispatch(fetchCovidVnExpressDataByMapThunk());
    dispatch(fetchCovidVnExpressDataByLocationThunk());
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
        <Box mt={4}>
          <ProvinceCharts />
        </Box>
        <Box mt={4}>
          <ProvinceByDayChart />
        </Box>
      </Container>
    </Box>
  );
};

export default HomeScreen;
