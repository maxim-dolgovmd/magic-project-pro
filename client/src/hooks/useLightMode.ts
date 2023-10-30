import { setThemeMode } from '../redux/slices/storageSlice';
import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'

type ThemeTooglerType = {
    theme: string
    mountedComponent: boolean
    themeToggler: () => void
}
export const useLightMode = () => {

    const dispatch = useDispatch()
    const [theme, setTheme] = useState('light');
    const [mountedComponent, setMountedComponent] = useState(false)

    const setMode = (mode: string) => {
        if (typeof window !== 'undefined' && window.localStorage) {
            localStorage.setItem('theme', mode)
            setTheme(mode)    
        }
    };

    const themeToggler = () => {
        theme === 'light' ? setMode('dark') : setMode('light')
    };

    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            const localTheme = localStorage.getItem('theme');
            setMountedComponent(true)
            localTheme && setTheme(localTheme)
        }
    }, []);
    dispatch(setThemeMode(theme))

return {theme, themeToggler, mountedComponent}

};