import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export interface UserAuthType {
    email: string,
    password: string,
}

export interface UserRegisrType {
    email: string,
    username: string,
    password: string,
}

const API_URL = 'http://localhost:5555/auth'

export const registrationApi = createApi({
    reducerPath: 'registrationApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),
    endpoints: (builder) => ({

        PostRegistration: builder.mutation<null, UserRegisrType>({
            query: ({username, email, password}) => {
                return {
                    url: '/register',
                    method: 'POST',
                    body: {
                        username: username,
                        email: email,
                        passwordHash: password,
                    }
                }
            }
        }),

        PostAuthorization: builder.mutation<null, UserAuthType>({
            query: ({email, password}) => {
                return {
                    url: '/login',
                    method: 'POST',
                    body: {
                        email: email,
                        passwordHash: password,
                    },
                }
            }
        }),

        GetMe: builder.mutation<any, void>({
            query: () => {
                return {
                    url: '/me',
                    method: 'GET',
                    headers: {
                        Authorization: (window.localStorage.getItem('token') as any)
                    },
                }
            }
        }),

        AuthUpdate: builder.mutation({
            query: ({userName, loginValue, passwordUser}) => {
                return {
                    url: '/update',
                    method: 'PATCH',
                    body: {
                        username: userName,
                        email: loginValue,
                        passwordHash: passwordUser
                    },
                    headers: {
                        Authorization: (window.localStorage.getItem('token') as any)
                    },
                }
            }
        })
    })
})

export const { 
    usePostRegistrationMutation,
    usePostAuthorizationMutation,
    useAuthUpdateMutation,
    useGetMeMutation
} = registrationApi