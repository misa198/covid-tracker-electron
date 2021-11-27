import { Button, Grid, Paper, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import Loading from '../../common/Loading';
import {
  formatNumber,
  formatNumberWithComma,
} from '../../../utils/formatNumber';

const ranges = [
  {
    value: 30,
    label: '1 tháng',
  },
  {
    value: 60,
    label: '2 tháng',
  },
  {
    value: 90,
    label: '3 tháng',
  },
  {
    value: 1000000,
    label: 'Toàn bộ',
  },
];

const VietnamCasesByDayChart = () => {
  const theme = useTheme();
  const homeState = useSelector((state) => state.home);
  const { dataByDay } = homeState;
  const [chartData, setChartData] = useState({
    dates: [],
    confirmed: [],
    deaths: [],
    recovered: [],
  });
  const [selectedRange, setSelectedRange] = useState(ranges[0]);

  function onSelectRange(range) {
    setSelectedRange(range);
  }

  useEffect(() => {
    const dates = [];
    const confirmed = [];
    const recovered = [];
    const deaths = [];
    const selectedData = dataByDay.data.slice(
      dataByDay.data.length - selectedRange.value,
    );
    selectedData.map((item) => dates.push(item.date));
    selectedData.map((item) => confirmed.push(item.newConfirmed));
    selectedData.map((item) => recovered.push(item.newRecovered));
    selectedData.map((item) => deaths.push(item.newDeaths));

    setChartData({
      dates,
      confirmed,
      deaths,
      recovered,
    });
  }, [dataByDay.data, selectedRange]);

  return (
    <Paper
      elevation={2}
      sx={{ overflow: 'hidden', py: 4, position: 'relative' }}
    >
      <Loading hide={!homeState.dataByDay.loading} />
      <Typography
        variant="h6"
        sx={{ fontWeight: 'bold', textAlign: 'center', mb: 3 }}
      >
        Diễn biến dịch tại Việt Nam
      </Typography>
      <Chart
        options={{
          theme: {
            mode: 'dark',
          },
          dataLabels: {
            enabled: false,
          },
          colors: [
            theme.palette.common.confirmed,
            theme.palette.common.recovered,
            theme.palette.common.deaths,
          ],
          chart: {
            id: 'chart',
            zoom: false,
            toolbar: {
              show: false,
            },
            background: 'rgba(0, 0, 0, 0)',
          },
          xaxis: {
            categories: chartData.dates,
            tickPlacement: 'on',
            tickAmount: 5,
            labels: {
              rotate: 0,
              rotateAlways: false,
            },
          },
          yaxis: {
            labels: {
              formatter(value) {
                return formatNumberWithComma(value);
              },
            },
          },
          stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            width: 2,
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
            data: chartData.confirmed,
          },
          {
            name: 'Hồi phục',
            data: chartData.recovered,
          },
          {
            name: 'Tử vong',
            data: chartData.deaths,
          },
        ]}
        type="area"
      />
      <Grid container spacing={2} sx={{ width: '100%', px: 2, mt: 2 }}>
        {ranges.map((item) => (
          <Grid item xs={3} key={item.value}>
            <Button
              variant={
                selectedRange.value === item.value ? 'contained' : 'outlined'
              }
              fullWidth
              onClick={() => onSelectRange(item)}
            >
              {item.label}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default VietnamCasesByDayChart;
