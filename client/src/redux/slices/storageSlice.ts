import {PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';

interface InitialType {
    user: string
    toScroll: boolean
}

const initialState: InitialType = {
    user: '',
    toScroll: true
}

const storageSlice = createSlice({
    name: 'Storage',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<any>) {
            state.user = action.payload
        },

        setToScroll(state, action: PayloadAction<boolean>) {
            state.toScroll = action.payload
        }
    }
})

export const {
    setUser,
    setToScroll
} = storageSlice.actions

export const StorageSelect = (state: RootState) => state.storage
export const ToScrollSelect = (state: RootState) => state.storage

export default storageSlice.reducer