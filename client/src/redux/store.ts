import {configureStore} from '@reduxjs/toolkit'
import addCart from './slices/addCartSlice'
import storage from './slices/storageSlice'
import newIngr from './slices/ingridientSlice'
import {ingridientApi} from '../services/ingridientsApi'
import {ordersApi} from '../services/ordersApi'
import {registrationApi} from '../services/registrationApi'
import { useDispatch } from 'react-redux'
import { categoriesApi } from '../services/categoriesApi'

export const store = configureStore({
    reducer: {
        addCart,
        storage,
        newIngr,
        [ingridientApi.reducerPath]: ingridientApi.reducer,
        [ordersApi.reducerPath]: ordersApi.reducer,
        [registrationApi.reducerPath]: registrationApi.reducer,
        [categoriesApi.reducerPath]: categoriesApi.reducer,
    },
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat([
        ingridientApi.middleware,
        ordersApi.middleware, 
        registrationApi.middleware,
        categoriesApi.middleware
    ]),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch