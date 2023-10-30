import React from "react"
import styled from 'styled-components'

import Image from "next/image"
import {useDispatch } from "react-redux";
import {setDeleteProduct} from '../../redux/slices/addCartSlice'
import { useAppDispatch } from "@/components/redux/store";
import { device, size } from "../device/device";
import Price from '../../assets/icon/price.svg'

const Box = styled.div`
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
    color: ${({theme}) => theme.ingridientTextBox};
    font-weight: 400;
    font-size: 20px;
    line-height: 18px;
    padding-right: 8px;

    svg path {
        fill: ${({theme}) => theme.priceImg};
    }
`

const PriceImage = styled(Price)`
    @media ${device.mobileL} {
        display: none;
    }
`

const BoxImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`


const BoxName = styled.div`
    display: flex;
    /* width: 255px; */
    justify-content: flex-start;
    align-items: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${({theme}) => theme.ingridientTextBox};
    padding-right: 8px;
    hyphens: manual;

    @media (min-width: ${size.laptopL}) {
        width: 255px;
    }
    @media ${device.laptop} {
        width: 255px;
    }
    @media ${device.mobileL} {
        font-size: 12px;
    }
`


type IngridientTypeBurgers = {
    photo: string,
    price: number,
    nameItem: string,
    index: number,
}

const IngridientBurger: React.FC<IngridientTypeBurgers> = ({
    photo,
    price,
    nameItem,
    index,
}) => {

    const dispatch = useAppDispatch() 

    const deleteIngr = (index: number) => {
        dispatch(setDeleteProduct(index))
    }
    console.log(photo)

    return (
        // <Wrapper> 
        <React.Fragment>
            <div>
                <img src={`http://localhost:5555${photo}`} width={80} height={40} alt="Crator" />
            </div>
            <BoxName>{nameItem}</BoxName>
            <Box>
                <div>{price}</div>
                <PriceImage />
            </Box>
            <BoxImage onClick={() => deleteIngr(index)}>
                <Image src='/block.svg' width={24} height={24} alt="Block" />
            </BoxImage>
        </React.Fragment>
        // </Wrapper>
    )
}

export default IngridientBurger