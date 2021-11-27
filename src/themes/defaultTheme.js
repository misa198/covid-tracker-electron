import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#d84315',
    },
    common: {
      secondaryPaper: '#374151',
      confirmed: '#fb8c00',
      confirmedBg: '#fff9c4',
      recovered: '#10b981',
      recoveredBg: '#b9f6ca',
      curing: '#455a64',
      curingBg: '#cfd8dc',
      deaths: '#d84315',
      deathsBg: '#ffccbc',
      secondDose: '#10b981',
      firstDose: '#81b983',
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
