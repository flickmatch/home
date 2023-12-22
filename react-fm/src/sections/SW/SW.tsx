import { useCallback, useEffect } from 'react';

import { useRegisterSW } from 'virtual:pwa-register/react';

// TODO (Suren): this should be a custom hook :)
function SW() {
  //const [, notificationsActions] = useNotifications();
  //const notificationKey = useRef<SnackbarKey | null>(null);
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW();

  const close = useCallback(() => {
    setOfflineReady(false);
    setNeedRefresh(false);
  }, [setOfflineReady, setNeedRefresh]);

  useEffect(() => {
    if (offlineReady) {
      // notificationsActions.push({
      //   options: {
      //     autoHideDuration: 4500,
      //     content: <Alert severity="success">App is ready to work offline.</Alert>,
      //   },
      // });
    } else if (needRefresh) {
      updateServiceWorker(true);
    }
  }, [close, needRefresh, offlineReady, updateServiceWorker]);

  return null;
}

export default SW;
