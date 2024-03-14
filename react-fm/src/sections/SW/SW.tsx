import { useCallback, useEffect } from 'react';

import { useRegisterSW } from 'virtual:pwa-register/react';

// TODO (Suren): this should be a custom hook :)
function SW() {
  //const [, notificationsActions] = useNotifications();
  //const notificationKey = useRef<SnackbarKey | null>(null);
  const {
    ///offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW();

  const close = useCallback(() => {
    //setOfflineReady(false);
    setNeedRefresh(false);
  }, [setNeedRefresh]);

  useEffect(() => {
    updateServiceWorker(true);
  }, [close, needRefresh, updateServiceWorker]);

  return null;
}

export default SW;
