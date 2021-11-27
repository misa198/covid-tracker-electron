import {
  Box,
  LinearProgress,
  Grid,
  Paper,
  Typography,
  linearProgressClasses,
} from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { formatNumber } from '../../../utils/formatNumber';
import Loading from '../../common/Loading';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 18,
  borderRadius: 3,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#ccc',
  },
  [`& .${linearProgressClasses.bar}`]: {
    backgroundColor: theme.palette.common.secondDose,
  },
}));

const Overview = () => {
  const theme = useTheme();
  const overview = useSelector((state) => state.vaccine.overview);

  return (
    <Paper sx={{ p: 2, position: 'relative' }}>
      <Loading hide={!overview.loading} />
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={4} sx={{ color: theme.palette.common.secondDose }}>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 'bold', textAlign: 'center', mb: 2 }}
          >
            Tổng số người đã tiêm
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontWeight: '700', textAlign: 'center' }}
          >
            {formatNumber(overview.data.firstTotal + overview.data.secondTotal)}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 'bold', textAlign: 'center', mb: 2 }}
          >
            Đã tiêm 1 mũi
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontWeight: '700', textAlign: 'center' }}
          >
            {formatNumber(overview.data.firstTotal)}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 'bold', textAlign: 'center', mb: 2 }}
          >
            Đã tiêm 2 mũi
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontWeight: '700', textAlign: 'center' }}
          >
            {formatNumber(overview.data.secondTotal)}
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          variant="subtitle2"
          sx={{ fontWeight: '700', color: theme.palette.common.firstDose }}
        >
          Tỉ lệ đã tiêm 1 mũi
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ fontWeight: '700', color: theme.palette.common.firstDose }}
        >
          {overview.data.firstRatio.toFixed(2)}%
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
        <Typography
          variant="subtitle2"
          sx={{ fontWeight: '700', color: theme.palette.common.secondDose }}
        >
          Tỉ lệ đã tiêm 2 mũi
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ fontWeight: '700', color: theme.palette.common.secondDose }}
        >
          {overview.data.secondRatio.toFixed(2)}%
        </Typography>
      </Box>
      <Box mt={2}>
        <BorderLinearProgress
          variant="determinate"
          thickness={20}
          value={overview.data.secondRatio}
        />
      </Box>
    </Paper>
  );
};

export default Overview;
