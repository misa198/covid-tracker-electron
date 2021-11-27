import { Container } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchKompaNewsThunk } from '../app/store/thunks/newsThunk';
import NewsList from '../components/screens/news/NewsList';

const NewsScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchKompaNewsThunk());
  }, [dispatch]);

  return (
    <Container sx={{ py: 4 }}>
      <NewsList />
    </Container>
  );
};

export default NewsScreen;
