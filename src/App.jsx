import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import DefaultLayout from './components/layouts/DefaultLayout';
import Screens from './screens';
import theme from './themes/defaultTheme';

const App = () => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <DefaultLayout>
            <Screens />
          </DefaultLayout>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
