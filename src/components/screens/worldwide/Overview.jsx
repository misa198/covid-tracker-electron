import { Box, Grid, Paper, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import CaseCard from '../../common/CaseCard';
import Loading from '../../common/Loading';

const Overview = () => {
  const theme = useTheme();
  const worldwideState = useSelector((state) => state.worldwide);
  const { data } = worldwideState;

  return (
    <Paper elevation={2} sx={{ p: 2, position: 'relative' }}>
      <Loading hide={!worldwideState.loading} />
      <Paper
        elevation={0}
        sx={{ backgroundColor: theme.palette.common.secondaryPaper, p: 1 }}
      >
        <Typography
          variant="h6"
          sx={{ textAlign: 'center', fontWeight: 'bold', mb: 1 }}
        >
          Số liệu Covid-19 trên thế giới
        </Typography>
      </Paper>
      <Box pt={2}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CaseCard
              type="confirmed"
              newCases={data.totalConfirmed - data.totalConfirmedLast}
              totalCases={data.totalConfirmed}
            />
          </Grid>
          <Grid item xs={12}>
            <CaseCard
              type="recovered"
              newCases={data.totalRecovered - data.totalRecoveredLast}
              totalCases={data.totalRecovered}
            />
          </Grid>
          <Grid item xs={12}>
            <CaseCard
              type="deaths"
              newCases={data.totalDeaths - data.totalDeathsLast}
              totalCases={data.totalDeaths}
            />
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default Overview;
