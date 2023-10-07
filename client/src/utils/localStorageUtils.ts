export const localStorageUtils = (token: any) => {

    if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('token', JSON.stringify(token));
      }
}