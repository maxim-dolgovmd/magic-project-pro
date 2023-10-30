import {PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';
import { getStorageMode } from '@/components/utils/getStorageMode';

interface InitialType {
    user: string
    toScroll: boolean
    themeMode: string
}

const initialState: InitialType = {
    user: '',
    toScroll: true,
    themeMode: 'light'
}

const storageSlice = createSlice({
    name: 'Storage',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<string>) {
            state.user = action.payload
        },

        setToScroll(state, action: PayloadAction<boolean>) {
            state.toScroll = action.payload
        },

        setThemeMode(state, action: PayloadAction<string>) {
            state.themeMode = action.payload
        }
    }
})

export const {
    setUser,
    setToScroll,
    setThemeMode,
} = storageSlice.actions

export const StorageSelect = (state: RootState) => state.storage
export const ToScrollSelect = (state: RootState) => state.storage
export const ThemeModeSelect = (state: RootState) => state.storage.themeMode

export default storageSlice.reducer