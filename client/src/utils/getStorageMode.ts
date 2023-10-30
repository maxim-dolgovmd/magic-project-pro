export const getStorageMode = () => {

    if (typeof window !== 'undefined' && window.localStorage) {
        const active = localStorage.getItem('theme')
        return active || ''
    }
}