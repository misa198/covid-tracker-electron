import { Grid, Paper, Typography } from '@mui/material';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import CaseCard from '../../common/CaseCard';
import Loading from '../../common/Loading';

const NewEpidemicOverview = () => {
  const homeState = useSelector((state) => state.home);

  const data = useMemo(() => {
    const { dataByDay } = homeState;
    if (dataByDay.data.length === 0) {
      return null;
    }
    const today = dataByDay.data[dataByDay.data.length - 1];
    return {
      confirmed: today.totalConfirmed2020,
      deaths: today.totalDeaths2020,
    };
  }, [homeState.dataByDay]);

  return (
    <Paper elevation={2} sx={{ p: 2, position: 'relative' }}>
      <Loading hide={!homeState.dataByDay.loading} />
      <Typography
        variant="h6"
        color="primary"
        sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4, mt: 2 }}
      >
        Kể từ đợt bùng phát 27/4
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CaseCard type="confirmed" hideNew totalCases={data?.confirmed} />
        </Grid>
        <Grid item xs={6}>
          <CaseCard type="deaths" hideNew totalCases={data?.deaths} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default NewEpidemicOverview;
