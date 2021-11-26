import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './themes/defaultTheme';
import DefaultLayout from './components/layouts/DefaultLayout';

const App = () => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <DefaultLayout>Hello World</DefaultLayout>
      </ThemeProvider>
    </>
  );
};

export default App;
