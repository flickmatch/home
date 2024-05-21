import { GoogleOAuthProvider } from '@react-oauth/google';
import type { ComponentType } from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { RecoilRoot } from 'recoil';

import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';

import ThemeProvider from '@/theme/Provider';

import store from './store';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'flickmatch-6e505.firebaseapp.com',
  projectId: 'flickmatch-6e505',
  storageBucket: 'flickmatch-6e505.appspot.com',
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
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
              <Provider store={store}>
                <App />
              </Provider>
            </ThemeProvider>
          </HelmetProvider>
        </RecoilRoot>
      </StrictMode>
    </GoogleOAuthProvider>,
  );
}

export default render;
