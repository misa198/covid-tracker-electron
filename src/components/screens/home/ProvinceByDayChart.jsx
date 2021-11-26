import {
  Box,
  Button,
  FormControl,
  Grid,
  MenuItem,
  Paper,
  Select,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import {
  formatNumber,
  formatNumberWithComma,
} from '../../../utils/formatNumber';
import Loading from '../../common/Loading';

const ranges = [
  { label: '1 tháng', value: 30 },
  { label: '2 tháng', value: 60 },
  { label: '3 tháng', value: 90 },
  { label: 'Toàn bộ', value: 10000 },
];

const ProvinceByDayChart = () => {
  const theme = useTheme();
  const dataByLocation = useSelector((state) => state.home.dataByLocation);
  const [selectedProvince, setSelectedProvince] = useState({
    name: 'TP HCM',
    slug: 'tp-hcm',
  });
  const [selectedRange, setSelectedRange] = useState(ranges[0]);
  const [dataChart, setDataChart] = useState({
    dates: [],
    cases: [],
  });
  const [provinces, setProvinces] = useState([]);

  useEffect(() => {
    const allProvinces = dataByLocation.data.map((item) => {
      return {
        name: item.name,
        slug: item.slug,
      };
    });
    setProvinces(allProvinces);
  }, [dataByLocation.data]);

  useEffect(() => {
    const selectedProvinceData = dataByLocation.data.find(
      (item) => item.slug === selectedProvince.slug,
    );
    if (selectedProvinceData) {
      const { data } = selectedProvinceData;
      const selectedRangeData = data.slice(
        data.length - selectedRange.value,
        data.length,
      );
      const dates = selectedRangeData.map((item) => item.date);
      const cases = selectedRangeData.map((item) => item.confirmed);
      setDataChart({
        dates,
        cases,
      });
    }
  }, [dataByLocation.data, selectedProvince, selectedRange]);

  const onSelectedProvinceChange = (e) => {
    setSelectedProvince(provinces.find((item) => item.slug === e.target.value));
  };

  const onSelectRange = (e) => {
    setSelectedRange(ranges.find((item) => item.value === e.value));
  };

  return (
    <Paper sx={{ p: 2, py: 4, position: 'relative' }}>
      <Loading hide={!dataByLocation.loading} />
      <Typography
        variant="h6"
        sx={{ fontWeight: 'bold', textAlign: 'center', mb: 2 }}
      >
        Số ca nhiễm theo ngày từng tỉnh
      </Typography>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          mb: 4,
          mt: 2,
        }}
      >
        <FormControl variant="standard">
          <Select
            value={selectedProvince.slug}
            onChange={onSelectedProvinceChange}
            sx={{ width: '300px' }}
          >
            {provinces.map((item) => (
              <MenuItem key={item.slug} value={item.slug}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Chart
        options={{
          theme: {
            mode: 'dark',
          },
          dataLabels: {
            enabled: false,
          },
          colors: [theme.palette.common.confirmed],
          chart: {
            id: 'chart',
            zoom: false,
            toolbar: {
              show: false,
            },
            background: 'rgba(0, 0, 0, 0)',
          },
          xaxis: {
            categories: dataChart.dates,
            tickPlacement: 'on',
            tickAmount: 5,
            labels: {
              rotate: 0,
              rotateAlways: false,
            },
          },
          tooltip: {
            y: {
              formatter(value) {
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
            show: false,
          },
        }}
        series={[
          {
            name: 'Ca nhiễm',
            data: dataChart.cases,
          },
        ]}
        type="bar"
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

export default ProvinceByDayChart;
