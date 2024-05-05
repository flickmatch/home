import { GoogleOAuthProvider } from '@react-oauth/google';
import type { ComponentType } from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { RecoilRoot } from 'recoil';

import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';

import ThemeProvider from '@/theme/Provider';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA2xbxgRiRWVbvs3Io2Cy-tEKrsrpi4vWU',
  authDomain: 'flickmatch-6e505.firebaseapp.com',
  projectId: 'flickmatch-6e505',
  storageBucket: 'flickmatch-6e505.appspot.com',
  messagingSenderId: '402436372416',
  appId: '1:402436372416:web:13883a78b8f75b4f95fa25',
  measurementId: 'G-XDRGTBJZML',
};

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const analytics = getAnalytics(app);

function render(App: ComponentType) {
  root.render(
    <GoogleOAuthProvider clientId="967689051729-u5kn73uscp0gp6s2itk6t4cs5fgkenkn.apps.googleusercontent.com">
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
