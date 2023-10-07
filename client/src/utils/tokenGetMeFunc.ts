import React from "react"
import { useRouter } from "next/router"
import {useDispatch} from 'react-redux'
import { setUser } from "../redux/slices/storageSlice"
import { useGetMeMutation } from "../services/registrationApi"
export const TokenGetMeFunc = () => {
    const [getMe] = useGetMeMutation()
    const router = useRouter()
    const dispatch = useDispatch()
    React.useEffect(() => {
        const fetchMe = async () => {
            const {data}: any = await getMe()
            if (!Object.keys(data || '').length) {
              router.push('/')
            }
            if (Object.keys(data || 0).length > 0) {
              dispatch(setUser(data?.email))
            }
        }
        fetchMe()
    }, [])
}