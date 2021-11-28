import { Button, Grid, Paper, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { useSelector } from 'react-redux';
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

const TotalDosesByDayChart = () => {
  const theme = useTheme();
  const overview = useSelector((state) => state.vaccine.overview);
  const data = useSelector((state) =>
    JSON.parse(JSON.stringify(state.vaccine.overview.data.summaryDoses)),
  );
  const [selectedRange, setSelectedRange] = useState(ranges[0]);
  const [dataChart, setDataChart] = useState({
    dates: [],
    firstDose: [],
    secondDose: [],
  });

  function onSelectRange(range) {
    setSelectedRange(range);
  }

  useEffect(() => {
    const selectedData = data.slice(
      data.length - selectedRange.value,
      data.length,
    );
    const dates = selectedData.map((item) => item.date);
    const firstDose = selectedData.map((item) => item.first + item.second);
    const secondDose = selectedData.map((item) => item.second);
    setDataChart({
      dates,
      firstDose,
      secondDose,
    });
  }, [selectedRange, overview.data.dayDoses]);

  return (
    <Paper elevation={2} sx={{ py: 4, pl: 1 }}>
      <Typography
        variant="h6"
        sx={{ fontWeight: 'bold', textAlign: 'center', mb: 2 }}
      >
        Tổng số người được tiêm theo ngày
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
            theme.palette.common.firstDose,
            theme.palette.common.secondDose,
          ],
          chart: {
            id: 'dose-by-day-chart',
            stacked: false,
            zoom: false,
            toolbar: {
              show: false,
            },
            background: 'rgba(0, 0, 0, 0)',
          },
          xaxis: {
            categories: dataChart.dates,
            tickPlacement: 'on',
            tickAmount: 3,
            labels: {
              rotate: 0,
              rotateAlways: false,
            },
          },
          fill: {
            type: 'gradient',
            gradient: {
              opacityFrom: 0.7,
              opacityTo: 0.7,
            },
          },
          tooltip: {
            y: {
              formatter: (value) => {
                return formatNumber(value);
              },
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
            width: 1,
          },
        }}
        series={[
          {
            name: 'Đã được tiêm',
            data: dataChart.firstDose,
            type: 'area',
          },
          {
            name: 'Tiêm đủ 2 mũi',
            data: dataChart.secondDose,
            type: 'area',
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

export default TotalDosesByDayChart;
