import { Box, Grid, Paper, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import CaseCard from '../../common/CaseCard';
import Loading from '../../common/Loading';

const Overview = () => {
  const theme = useTheme();
  const homeState = useSelector((state) => state.home);

  const data = useMemo(() => {
    const { dataByDay } = homeState;
    if (dataByDay.data.length === 0) {
      return {};
    }
    const today = dataByDay.data[dataByDay.data.length - 1];
    const yesterday = dataByDay.data[dataByDay.data.length - 2];
    const isToday =
      parseInt(homeState.updatedAt.split(', ')[1].split('/'), 10) ===
      new Date().getDate();
    return {
      isToday,
      confirmed: isToday ? today.newConfirmed : yesterday.newConfirmed,
      recovered: isToday ? today.newRecovered : yesterday.newRecovered,
      deaths: isToday ? today.newDeaths : yesterday.newDeaths,
      curing: isToday ? today.newCuring : yesterday.newCuring,
      totalConfirmed: today.totalConfirmed2020,
      totalRecovered: today.totalRecovered2020,
      totalDeaths: today.totalDeaths2020,
      totalCuring: today.totalCuring,
    };
  }, [homeState.dataByDay]);

  return (
    <Paper elevation={2} sx={{ p: 2, position: 'relative' }}>
      <Loading hide={!homeState.dataByDay.loading} />
      <Paper
        elevation={0}
        sx={{ backgroundColor: theme.palette.common.secondaryPaper, p: 1 }}
      >
        <Typography
          variant="h6"
          sx={{ textAlign: 'center', fontWeight: 'bold', mb: 1 }}
        >
          Số liệu Covid-19 tại Việt Nam
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ textAlign: 'center', fontWeight: 'bold' }}
        >
          Cập nhật: {homeState.updatedAt}
        </Typography>
      </Paper>
      <Box pt={2}>
        <Typography
          variant="subtitle1"
          color="primary"
          sx={{ fontWeight: 'bold', textAlign: 'center', mb: 2 }}
        >
          Kể từ khi dịch bùng phát từ đầu 2020 đến nay
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <CaseCard
              type="confirmed"
              newCases={data.confirmed}
              totalCases={data.totalConfirmed}
              isToday={data.isToday}
            />
          </Grid>
          <Grid item xs={6}>
            <CaseCard
              type="recovered"
              newCases={data.recovered}
              totalCases={data.totalRecovered}
              isToday={data.isToday}
            />
          </Grid>
          <Grid item xs={6}>
            <CaseCard
              type="deaths"
              newCases={data.deaths}
              totalCases={data.totalDeaths}
              isToday={data.isToday}
            />
          </Grid>
          <Grid item xs={6}>
            <CaseCard
              type="curing"
              newCases={data.curing}
              totalCases={data.totalCuring}
              isToday={data.isToday}
            />
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default Overview;
