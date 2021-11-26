import { useEffect } from 'react';
import { fetchCovidVnExpressDataByDay } from '../app/apis/vnExpressApi';

const HomeScreen = () => {
  useEffect(() => {
    fetchCovidVnExpressDataByDay().then(console.log);
  }, []);

  return <>Home</>;
};

export default HomeScreen;
