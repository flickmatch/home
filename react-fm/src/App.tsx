import { Fragment, useEffect } from 'react';
import ReactGA from 'react-ga';
import { BrowserRouter } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider } from '@mui/material/styles';

import { withErrorHandler } from '@/error-handling';
import AppErrorBoundaryFallback from '@/error-handling/fallbacks/App';
import Pages from '@/routes/Pages';
//import Footer from '@/sections/Footer';
import Header from '@/sections/Header';
import HotKeys from '@/sections/HotKeys';
import Notifications from '@/sections/Notifications';
import SW from '@/sections/SW';
import Sidebar from '@/sections/Sidebar';

function App() {
  useEffect(() => {
    ReactGA.initialize('G-12MG3SRC9K'); //tracking ID
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      <Fragment>
        <CssBaseline />
        <Notifications />
        <HotKeys />
        <SW />
        <BrowserRouter>
          <Notifications />
          <Header />
          <Notifications />
          <Sidebar />
          <Pages />
          {/* <Footer /> */}
        </BrowserRouter>
      </Fragment>
    </StyledEngineProvider>
  );
}

export default withErrorHandler(App, AppErrorBoundaryFallback);
