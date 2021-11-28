import { Box, Paper, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { formatNumber } from '../../utils/formatNumber';

const CaseCard = ({ type, hideNew, newCases, totalCases, isToday }) => {
  const theme = useTheme();
  const color = useMemo(() => {
    switch (type) {
      case 'confirmed':
        return theme.palette.common.confirmed;
      case 'recovered':
        return theme.palette.common.recovered;
      case 'deaths':
        return theme.palette.common.deaths;
      default:
        return theme.palette.common.curing;
    }
  }, [type]);
  const bg = useMemo(() => {
    switch (type) {
      case 'confirmed':
        return theme.palette.common.confirmedBg;
      case 'recovered':
        return theme.palette.common.recoveredBg;
      case 'deaths':
        return theme.palette.common.deathsBg;
      default:
        return theme.palette.common.curingBg;
    }
  }, [type]);

  const label = useMemo(() => {
    switch (type) {
      case 'confirmed':
        return 'Nhiễm bệnh';
      case 'recovered':
        return 'Hồi phục';
      case 'deaths':
        return 'Tử vong';
      default:
        return 'Đang điều trị';
    }
  }, [type]);

  return (
    <Box sx={{ width: '100%' }}>
      {!hideNew && (
        <Typography
          variant="subtitle2"
          color={type === 'curing' ? bg : color}
          sx={{ textAlign: 'center' }}
        >
          {isToday ? 'Hôm nay' : 'Hôm qua'}: {newCases >= 0 ? '+' : '-'}
          {formatNumber(newCases || 0)}
        </Typography>
      )}

      <Typography
        variant="h5"
        color={type === 'curing' ? bg : color}
        sx={{ textAlign: 'center', fontWeight: 'bold', mb: 1 }}
      >
        {formatNumber(totalCases || 0)}
      </Typography>
      <Paper sx={{ backgroundColor: bg }}>
        <Typography
          variant="subtitle1"
          color={color}
          sx={{ textAlign: 'center', fontWeight: 'bold', mb: 2 }}
        >
          {label}
        </Typography>
      </Paper>
    </Box>
  );
};

CaseCard.propTypes = {
  type: PropTypes.oneOf(['confirmed', 'recovered', 'deaths', 'curing'])
    .isRequired,
  hideNew: PropTypes.bool,
  newCases: PropTypes.number,
  totalCases: PropTypes.number,
  isToday: PropTypes.bool,
};

CaseCard.defaultProps = {
  hideNew: false,
  isToday: true,
  newCases: 0,
  totalCases: 0,
};

export default CaseCard;
