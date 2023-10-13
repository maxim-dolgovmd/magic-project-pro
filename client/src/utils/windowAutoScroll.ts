import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import { ToScrollSelect } from "../redux/slices/storageSlice";
import {setToScroll} from '@/components/redux/slices/storageSlice'

export const windowAutoScroll = () => {

    const dispatch = useDispatch()

    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', function () {
            const scrollPosition = window.scrollY;
            console.log(scrollPosition);
            if (scrollPosition > 300) {
                dispatch(setToScroll(false))
            } else {
                dispatch(setToScroll(true))
            }
          });
      }
}