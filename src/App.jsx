import '@fontsource/roboto';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { HashRouter } from 'react-router-dom';
import DefaultLayout from './components/layouts/DefaultLayout';
import Screens from './screens';
import theme from './themes/defaultTheme';

const App = () => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <HashRouter>
          <DefaultLayout>
            <Screens />
          </DefaultLayout>
        </HashRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
