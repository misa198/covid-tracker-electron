import { Box, Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const NewsCard = ({ news }) => {
  return (
    <Grid container sx={{ cursor: 'pointer', userSelect: 'none' }}>
      <Grid item xs={4}>
        <Box
          sx={{
            width: '100%',
            paddingTop: '62.22%',
            overflow: 'hidden',
            borderRadius: '0.2rem',
            backgroundImage: `url(${news.picture})`,
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
            {news.content}...
          </Typography>
          <Box sx={{ mb: 1.5 }}>
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              {news.publishedDate}
            </Typography>
          </Box>
          <Box>
            <Typography variant="subtile2">Theo</Typography>{' '}
            <Typography variant="subtile2" sx={{ fontStyle: 'italic' }}>
              {news.siteName}
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
