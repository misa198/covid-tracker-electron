import { Grid, Paper } from '@mui/material';
import NewsCard from './NewsCard';
import { useSelector } from 'react-redux';
import Loading from '../../common/Loading';

const NewsList = () => {
  const newsState = useSelector((state) => state.news);

  return (
    <Paper
      elevation={2}
      sx={{ p: 2, position: 'relative', minHeight: '300px' }}
    >
      <Loading hide={!newsState.loading} />
      <Grid container spacing={3}>
        {newsState.data.map((news) => (
          <Grid item xs={12} key={news.id}>
            <NewsCard news={news} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default NewsList;
