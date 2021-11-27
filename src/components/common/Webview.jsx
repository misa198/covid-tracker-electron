import { Box, Button, Typography } from '@mui/material';
import { useWindowHeight } from '@react-hook/window-size';
import { useDispatch, useSelector } from 'react-redux';
import { newsActions } from '../../app/store/slices/newsSlice';

const Webview = () => {
  const dispatch = useDispatch();
  const windowHeight = useWindowHeight();
  const webviewUrl = useSelector((state) => state.news.webviewUrl);

  const onClose = () => {
    dispatch(newsActions.setNews(''));
  };

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: windowHeight - 64,
        zIndex: 20,
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
      }}
      id="news-webview"
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          px: 2,
          py: 1,
          overflow: 'hidden',
          borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            overflow: 'hidden',
          }}
        >
          <Typography sx={{ color: '#777' }}>{webviewUrl}</Typography>
        </Box>
        <Button color="primary" variant="outlined" onClick={onClose}>
          Đóng
        </Button>
      </Box>
      <webview
        sandbox
        width="100%"
        style={{ flex: 1 }}
        src={webviewUrl}
        title="news"
      />
    </Box>
  );
};

export default Webview;
