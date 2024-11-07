import { useEffect } from 'react';

function useExpireCookies(excludedCookies: string[] = []): void {
  useEffect(() => {
    const expireCookiesExceptLogin = (): void => {
      const cookies = document.cookie.split(';');
      // console.log(cookies);
      cookies.forEach((cookie) => {
        const cookieName = cookie.split('=')[0].trim();

        if (!excludedCookies.includes(cookieName)) {
          document.cookie = `${cookieName}=; expires=${new Date(
            Date.now() - 3 * 24 * 60 * 60 * 1000,
          ).toUTCString()}; path=/;`;
        }
      });
    };

    expireCookiesExceptLogin();
  }, [excludedCookies]);
}

export default useExpireCookies;
