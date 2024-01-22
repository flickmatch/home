import { GoogleOAuthProvider } from '@react-oauth/google';
import type { ComponentType } from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { RecoilRoot } from 'recoil';

import ThemeProvider from '@/theme/Provider';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

function render(App: ComponentType) {
  root.render(
    <GoogleOAuthProvider clientId="54070824622-497b2hfh41klt5vrebg67pbu5oqfqek3.apps.googleusercontent.com">
      <StrictMode>
        <RecoilRoot>
          <HelmetProvider>
            <ThemeProvider>
              <App />
            </ThemeProvider>
          </HelmetProvider>
        </RecoilRoot>
      </StrictMode>
    </GoogleOAuthProvider>,
  );
}

export default render;
