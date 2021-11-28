import { Box, Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { newsActions } from '../../../app/store/slices/newsSlice';
import { defaultNewsCoverImage } from '../../../constants/configs';
import { formatTime } from '../../../utils/formatTime';

const NewsCard = ({ news }) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(newsActions.setNews(news.share_url));
  };

  return (
    <Grid
      container
      sx={{ cursor: 'pointer', userSelect: 'none' }}
      onClick={onClick}
    >
      <Grid item xs={4}>
        <Box
          sx={{
            width: '100%',
            paddingTop: '62.22%',
            overflow: 'hidden',
            borderRadius: '0.2rem',
            backgroundImage: `url(${
              news.off_thumb ? defaultNewsCoverImage : news.thumbnail_url
            })`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </Grid>
      <Grid xs={8}>
        <Box ml={2}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
            {news.title}
          </Typography>
          <Typography variant="body2" mb={1}>
            {news.lead}...
          </Typography>
          <Box sx={{ mb: 1.5 }}>
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              {formatTime(news.publish_time * 1000)}
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

NewsCard.propTypes = {
  news: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default NewsCard;
