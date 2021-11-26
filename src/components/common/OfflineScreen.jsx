import WifiOffOutlinedIcon from '@mui/icons-material/WifiOffOutlined';
import { Box, Typography } from '@mui/material';

const OfflineScreen = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: 10,
        color: 'text.secondary',
      }}
    >
      <WifiOffOutlinedIcon sx={{ fontSize: 140, mb: 2 }} />
      <Typography variant="h5">Bạn đang ngoại tuyến</Typography>
    </Box>
  );
};

export default OfflineScreen;
