import {PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';

interface InitialType {
    newIngridient: boolean
}

const initialState: InitialType = {
    newIngridient: false
}

const ingridientSlice = createSlice({
    name: 'Storage',
    initialState,
    reducers: {
        setNewIngridient(state, action: PayloadAction<boolean>) {
            state.newIngridient = action.payload
        }
    }
})

export const {
    setNewIngridient
} = ingridientSlice.actions

export const IngrNewSelect = (state: RootState) => state.newIngr

export default ingridientSlice.reducer