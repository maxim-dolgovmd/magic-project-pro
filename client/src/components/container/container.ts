import { AddCartSelect } from '@/components/redux/slices/addCartSlice';
import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'

const Container = styled.div`
    max-width: 1280px;
    padding: 0 15px;
    box-sizing: content-box;
    margin: 0 auto;
    height: 100%;
    flex: 1 1 auto;

    @media (min-width: '767.97px') {
        max-width: 1300px;
        padding: 0 24px;
    }
`

export default React.memo(Container)