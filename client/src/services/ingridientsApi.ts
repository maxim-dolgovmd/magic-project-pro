import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IIngredient } from '../redux/slices/addCartSlice'

const API_URL = 'http://localhost:5555'

export const ingridientApi: any = createApi({
    reducerPath: 'ingridientApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),
    endpoints: (builder) => ({
        getIngridient: builder.query<IIngredient[], void>({
            query: () => {
                return {
                    url: `/ingridients`,
                    method: 'GET',
                }
            },
        }),

        createIngridient: builder.mutation<any, any>({
            query: ({largePhotoUrl, normalPhotoUrl, mobilePhotoUrl, previewPhotoUrl, price, name, category}) => {
                return {
                    url: '/ingridients',
                    method: 'POST',
                    body: {
                        largePhotoUrl,
                        normalPhotoUrl,
                        mobilePhotoUrl,
                        previewPhotoUrl,
                        price,
                        name,
                        category
                    }
                }
            }
        })
    })
})

export const {
    useCreateIngridientMutation,
    useGetIngridientQuery, 
} = ingridientApi