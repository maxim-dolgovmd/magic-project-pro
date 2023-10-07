import {PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';

interface InitialType {
    user: string
}

const initialState: InitialType = {
    user: ''
}

const storageSlice = createSlice({
    name: 'Storage',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<any>) {
            state.user = action.payload
        }
    }
})

export const {
    setUser
} = storageSlice.actions

export const StorageSelect = (state: RootState) => state.storage

export default storageSlice.reducer