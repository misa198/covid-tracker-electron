import '@fontsource/roboto';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { HashRouter } from 'react-router-dom';
import DefaultLayout from './components/layouts/DefaultLayout';
import Screens from './screens';
import theme from './themes/defaultTheme';
import OfflineBar from './components/common/OfflineBar';
import { Offline } from 'react-detect-offline';

const App = () => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <HashRouter>
          <DefaultLayout>
            <Offline>
              <OfflineBar />
            </Offline>
            <Screens />
          </DefaultLayout>
        </HashRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
