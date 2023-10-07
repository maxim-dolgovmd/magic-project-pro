import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const API_URL = 'http://localhost:5555'

export const categoriesApi = createApi({
    reducerPath: 'categoriesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),
    endpoints: (builder) => ({
        getCategory: builder.query<any, void>({
            query: () => {
                return {
                    url: `/category`,
                    method: 'GET',
                }
            },
        }),
    })
})

export const {
    useGetCategoryQuery, 
} = categoriesApi