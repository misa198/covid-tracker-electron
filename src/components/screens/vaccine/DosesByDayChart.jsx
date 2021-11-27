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

const DosesByDayChart = () => {
  const theme = useTheme();
  const overview = useSelector((state) => state.vaccine.overview);
  const [chartData, setChartData] = useState({
    dates: [],
    first: [],
    second: [],
    average: [],
  });
  const [selectedRange, setSelectedRange] = useState(ranges[0]);

  function onSelectRange(range) {
    setSelectedRange(range);
  }

  useEffect(() => {
    const dates = [];
    const first = [];
    const second = [];
    const average = [];
    const { data } = overview;
    const selectedData = data.dayDoses.slice(
      data.dayDoses.length - selectedRange.value,
    );
    selectedData.map((item) => dates.push(item.date));
    selectedData.map((item) => first.push(item.first));
    selectedData.map((item) => second.push(item.second));
    selectedData.map((item) => average.push(item.average));

    setChartData({
      dates,
      first,
      second,
      average,
    });
  }, [overview.data, selectedRange]);

  return (
    <Paper
      elevation={2}
      sx={{ overflow: 'hidden', py: 4, position: 'relative' }}
    >
      <Loading hide={!overview.loading} />
      <Typography
        variant="h6"
        sx={{ fontWeight: 'bold', textAlign: 'center', mb: 3 }}
      >
        Diễn biến tiêm chủng tại Việt Nam theo ngày
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
            theme.palette.common.secondDose,
            theme.palette.common.firstDose,
            theme.palette.common.confirmed,
          ],
          chart: {
            id: 'chart',
            zoom: false,
            stacked: true,
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
            name: 'Mũi 2',
            data: chartData.first,
            type: 'bar',
          },
          {
            name: 'Mũi 1',
            data: chartData.second,
            type: 'bar',
          },
          {
            name: 'Trung bình 7 ngày',
            data: chartData.average,
            type: 'line',
          },
        ]}
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

export default DosesByDayChart;
