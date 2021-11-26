import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#d84315',
    },
    text: {
      primary: '#fff',
    },
    background: {
      default: '#111827',
      paper: '#1f2937',
    },
  },
});

export default theme;
