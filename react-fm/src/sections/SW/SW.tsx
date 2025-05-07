import { useCallback, useEffect } from 'react';

import { useRegisterSW } from 'virtual:pwa-register/react';

function ReloadPrompt() {
  const {
    needRefresh: [needRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      // eslint-disable-next-line no-console
      console.log('SW Registered: ', r);
    },
    onRegisterError(error) {
      // eslint-disable-next-line no-console
      console.log('SW registration error', error);
    },
  });

  useEffect(() => {
    updateServiceWorker(true);
  }, [updateServiceWorker, needRefresh]);

  return null;
}

export default ReloadPrompt;
