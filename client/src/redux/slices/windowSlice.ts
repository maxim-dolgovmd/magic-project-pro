import {PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';
import { getStorageMode } from '@/components/utils/getStorageMode';

interface InitialType {
    activeStatusOrder: boolean
    activeIngridients: boolean
    updateActive: boolean
}

const initialState: InitialType = {
    activeStatusOrder: false,
    activeIngridients: false,
    updateActive: false
}

const windowSlice = createSlice({
    name: 'Window',
    initialState,
    reducers: {
        setActiveStatusOrder(state, action: PayloadAction<boolean>) {
            state.activeStatusOrder = action.payload
        },

        setActiveIngridients(state, action: PayloadAction<boolean>) {
            state.activeIngridients = action.payload
        },

        setUpdateActive(state, action: PayloadAction<boolean>) {
            state.updateActive = action.payload
        }
    }
})

export const {
    setActiveStatusOrder,
    setActiveIngridients,
    setUpdateActive,
} = windowSlice.actions

export const StatusOrderSelect = (state: RootState) => state.window.activeStatusOrder
export const ActiveIngrSelect = (state: RootState) => state.window.activeIngridients
export const UpdateActiveSelect = (state: RootState) => state.window.updateActive

export default windowSlice.reducer