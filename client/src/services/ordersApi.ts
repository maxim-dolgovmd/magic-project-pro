import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IIngredient, Order } from '../redux/slices/addCartSlice'

interface OrderQueryType {
    sumProduct: number
    addProduct: IIngredient[]
}

type GetOrderOneQuery = {
    id: string
}

const API_URL = 'http://localhost:5555'

export const ordersApi = createApi({
    reducerPath: 'ordersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        postOrder: builder.mutation<void, OrderQueryType>({
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

        getOrder: builder.query<Order[], void>({
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
        
        getAdminOrder: builder.query<Order[], void>({
            query: () => {
                return {
                    url: `/order`,
                    method: 'GET',
                }
            },
        }),

        getOneOrder: builder.query<Order, GetOrderOneQuery>({
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
            query: ({data, statusId}) => {
                console.log(data, statusId)
                return {
                    url: `/order/${data}`,
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