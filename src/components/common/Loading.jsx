import { Paper } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import PropTypes from 'prop-types';

const Loading = ({ hide }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        position: 'absolute',
        zIndex: 2,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        left: 0,
        visibility: hide ? 'hidden' : 'visible',
        opacity: hide ? 0 : 1,
        transition: 'visibility 0.2s, opacity 0.2s',
      }}
    >
      <CircularProgress />
    </Paper>
  );
};

Loading.propTypes = {
  hide: PropTypes.bool,
};

Loading.defaultProps = {
  hide: false,
};

export default Loading;
