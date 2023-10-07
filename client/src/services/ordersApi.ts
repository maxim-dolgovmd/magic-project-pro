import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IIngredient, Order } from '../redux/slices/addCartSlice'

interface PostMutationType {
    role: string,
    addProduct: IIngredient[],
}

interface GetQueryType {
    limit: string,
    offset: string,
    role: string,
}

interface ParamsDataType {
    offset: string,
    orders: Order[],
    limit: string,
}

const API_URL = 'http://localhost:5555'

export const ordersApi = createApi({
    reducerPath: 'ordersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        postOrder: builder.mutation<null, any>({
            query: ({sumProduct, addProduct}) => {
                return {
                    url: '/order',
                    method: 'POST',
                    headers: {
                        Authorization: (window.localStorage.getItem('token') as any)
                    },
                    body: {
                        name: 'заказ 1',
                        price: sumProduct,
                        status: 'in preparation',
                        ingredients: addProduct,
                    },
                }
            },
            invalidatesTags: ['User'],
        }),

        getOrder: builder.query<any, void>({
            query: () => {
                return {
                    url: `/order/user`,
                    method: 'GET',
                    headers: {
                        Authorization: (window.localStorage.getItem('token') as any)
                    },
                }
            },
            providesTags: ['User'],
        }),
        
        getAdminOrder: builder.query<any, void>({
            query: () => {
                return {
                    url: `/order`,
                    method: 'GET',
                    // headers: {
                    //     Authorization: (window.localStorage.getItem('token') as any)
                    // },
                }
            },
        }),

        getOneOrder: builder.query<any, any>({
            query: ({id}) => {
                return {
                    url: `/order/${id}`,
                    method: 'GET',
                    headers: {
                        Authorization: (window.localStorage.getItem('token') as any)
                    },
                }
            }
        }),

        updateStatusId: builder.mutation({
            query: ({orderId, statusId}) => {
                return {
                    url: `/order/${orderId}`,
                    method: 'PATCH',
                    body: {
                        status: statusId
                    }
                }
            }
        })
    })
})

export const {
    usePostOrderMutation, 
    useGetOrderQuery, 
    useGetAdminOrderQuery,
    useUpdateStatusIdMutation,
    useGetOneOrderQuery
} = ordersApi