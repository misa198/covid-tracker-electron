import WifiOffOutlinedIcon from '@mui/icons-material/WifiOffOutlined';
import { Box, Typography } from '@mui/material';

const OfflineScreen = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'text.secondary',
        backgroundColor: '#000',
        position: 'fixed',
        width: '100%',
        zIndex: 10,
        py: '5px',
      }}
    >
      <WifiOffOutlinedIcon sx={{ fontSize: 16 }} />
      <Typography variant="subtitle2" sx={{ ml: 1 }}>
        Bạn đang ngoại tuyến
      </Typography>
    </Box>
  );
};

export default OfflineScreen;
