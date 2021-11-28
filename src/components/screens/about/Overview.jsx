import { Box, Paper, Typography } from '@mui/material';
import logo from '../../../assets/logo.png';

const Overview = () => {
  return (
    <Paper sx={{ px: 2, py: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <img src={logo} alt="logo" style={{ width: '150px' }} />
      </Box>
      <Typography
        variant="h4"
        sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4 }}
      >
        Covid-19 Tracker
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ fontWeight: 'bold', textAlign: 'center', mb: 1.5 }}
      >
        Nguồn dữ liệu
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
        <Typography variant="subtitle2" sx={{ textAlign: 'center' }}>
          Dịch bệnh trong nước - VnExpress
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
        <Typography variant="subtitle2" sx={{ textAlign: 'center' }}>
          Dịch bệnh trên thế giới - Kompa
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
        <Typography variant="subtitle2" sx={{ textAlign: 'center' }}>
          Tin tức - VnExpress
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <Typography variant="subtitle2" sx={{ textAlign: 'center' }}>
          Vaccine - ZingNews
        </Typography>
      </Box>
    </Paper>
  );
};

export default Overview;
