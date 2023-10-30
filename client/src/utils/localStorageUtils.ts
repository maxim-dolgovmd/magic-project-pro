export const localStorageUtils = (token: string) => {

    if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('token', JSON.stringify(token));
      }
}