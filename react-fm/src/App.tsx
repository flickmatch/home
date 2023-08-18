import { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider } from '@mui/material/styles';

import { withErrorHandler } from '@/error-handling';
import AppErrorBoundaryFallback from '@/error-handling/fallbacks/App';
import Pages from '@/routes/Pages';
import Footer from '@/sections/Footer';
import Header from '@/sections/Header';
import HotKeys from '@/sections/HotKeys';
import Notifications from '@/sections/Notifications';
import SW from '@/sections/SW';
import Sidebar from '@/sections/Sidebar';

function App() {
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
          <Footer />
        </BrowserRouter>
      </Fragment>
    </StyledEngineProvider>
  );
}

export default withErrorHandler(App, AppErrorBoundaryFallback);
