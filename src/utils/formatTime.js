import dayjs from 'dayjs';

export const formatTime = (time) => {
  return dayjs(time).format('YYYY-MM-DD HH:mm');
};
