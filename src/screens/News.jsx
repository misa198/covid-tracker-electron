import { Box, Container } from '@mui/material';
import { useWindowHeight } from '@react-hook/window-size';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { createRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCovidVnExpressNewsThunk } from '../app/store/thunks/newsThunk';
import Webview from '../components/common/Webview';
import NewsList from '../components/screens/news/NewsList';
import { Online } from 'react-detect-offline';

const NewsScreen = () => {
  const dispatch = useDispatch();
  const webviewUrl = useSelector((state) => state.news.webviewUrl);
  const height = useWindowHeight();
  const targetRef = createRef();
  let target;

  useEffect(() => {
    dispatch(fetchCovidVnExpressNewsThunk());
  }, [dispatch]);

  useEffect(() => {
    target = targetRef.current;
  }, []);

  useEffect(() => {
    if (webviewUrl) {
      enableBodyScroll(target);
    } else {
      disableBodyScroll(target);
    }
  }, [webviewUrl]);

  return (
    <Box sx={{ position: 'relative' }}>
      <Online>{webviewUrl && <Webview />}</Online>
      <Container
        ref={targetRef}
        sx={{ py: 4, height: height - 64, overflow: 'auto' }}
      >
        <NewsList />
      </Container>
    </Box>
  );
};

export default NewsScreen;
