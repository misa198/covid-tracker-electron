import { Container, Box } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchKompaNewsThunk } from '../app/store/thunks/newsThunk';
import NewsList from '../components/screens/news/NewsList';
import Webview from '../components/common/Webview';
import { useWindowHeight } from '@react-hook/window-size';

const NewsScreen = () => {
  const dispatch = useDispatch();
  const webviewUrl = useSelector((state) => state.news.webviewUrl);
  const height = useWindowHeight();

  const lockScrollProps = { height: height - 64, overflow: 'hidden' };

  useEffect(() => {
    dispatch(fetchKompaNewsThunk());
  }, [dispatch]);

  return (
    <Box sx={{ position: 'relative' }}>
      {webviewUrl && <Webview />}
      <Container sx={!webviewUrl ? { py: 4 } : { py: 4, ...lockScrollProps }}>
        <NewsList />
      </Container>
    </Box>
  );
};

export default NewsScreen;
