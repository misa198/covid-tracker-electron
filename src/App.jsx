import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Offline, Online } from 'react-detect-offline';
import { BrowserRouter } from 'react-router-dom';
import OfflineScreen from './components/common/OfflineScreen';
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
            <Online>
              <Screens />
            </Online>
            <Offline>
              <OfflineScreen />
            </Offline>
          </DefaultLayout>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
