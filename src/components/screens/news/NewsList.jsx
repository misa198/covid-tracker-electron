import { Grid, Paper } from '@mui/material';
import NewsCard from './NewsCard';
import { useSelector } from 'react-redux';

const NewsList = () => {
  const newsState = useSelector((state) => state.news);

  return (
    <Paper elevation={2} sx={{ p: 2 }}>
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
