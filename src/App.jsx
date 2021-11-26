import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './themes/defaultTheme';

const App = () => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>Hello</ThemeProvider>
    </>
  );
};

export default App;
