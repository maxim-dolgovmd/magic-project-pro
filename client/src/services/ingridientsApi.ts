import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IIngredient } from '../redux/slices/addCartSlice'

const API_URL = 'http://localhost:5555'

type CreateQueryType = {
    largePhotoUrl: string,
    normalPhotoUrl: string,
    mobilePhotoUrl: string,
    previewPhotoUrl: string,
    price: number,
    name: string,
    category: string,
}

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

        createIngridient: builder.mutation<void, CreateQueryType>({
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