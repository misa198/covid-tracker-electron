import { Paper, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Chart from 'react-apexcharts';
import {
  formatNumber,
  formatNumberWithComma,
} from '../../../utils/formatNumber';

const ProvinceChart = ({ cases, provinces, title }) => {
  const theme = useTheme();

  return (
    <Paper elevation={2} sx={{ p: 2 }}>
      <Typography
        variant="h6"
        sx={{ fontWeight: 'bold', textAlign: 'center', mb: 2 }}
      >
        {title}
      </Typography>
      <Chart
        options={{
          theme: {
            mode: 'dark',
          },
          dataLabels: {
            enabled: true,
            formatter(value) {
              return formatNumber(value);
            },
          },
          colors: [theme.palette.common.deaths],
          chart: {
            id: 'chart',
            zoom: false,
            toolbar: {
              show: false,
            },
            background: 'rgba(0, 0, 0, 0)',
          },
          xaxis: {
            categories: provinces,
            tickPlacement: 'between',
          },
          yaxis: {
            labels: {
              formatter(value) {
                return formatNumberWithComma(value);
              },
            },
          },
          tooltip: {
            y: {
              formatter: (value) => {
                return formatNumber(value);
              },
            },
          },
        }}
        series={[
          {
            name: 'Ca nhiễm',
            data: cases,
          },
        ]}
        type="bar"
      />
    </Paper>
  );
};

ProvinceChart.propTypes = {
  cases: PropTypes.arrayOf(PropTypes.number).isRequired,
  provinces: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default ProvinceChart;
