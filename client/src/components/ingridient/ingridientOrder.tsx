import React from "react"
import styled, { ThemeProvider } from 'styled-components'

import Image from "next/image"
import { device, size } from "../device/device"
import PriceImg from '../../assets/icon/price.svg'


const Box = styled.div`
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
    color: #F2F2F3;
    font-weight: 400;
    font-size: 20px;
    line-height: 18px;

    svg path {
        fill: ${({ theme }) => theme.dinamicPathTitle}
    }
`

const Count = styled.div`
    color: ${({theme}) => theme.dinamicCompountOrder};
    @media ${device.tablet} {
        width: 80px;
    }
`


const BoxName = styled.div`
    display: flex;
    width: 255px;
    justify-content: flex-start;
    align-items: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${({theme}) => theme.dinamicCompountOrder};

    @media ${device.tablet} {
        width: auto;
        padding-right: 20px;
    }

    @media ${device.mobileL} {
        padding-right: 12px;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
    }
`

const IngrOrder = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`

const BoxTitle = styled.div`
    display: flex;
    gap: 16px;

    @media ${device.mobileL} {
        gap: 10px;
    }
`

type IngridientTypeOrders = {
    photo: string,
    price: number,
    nameItem: string,
    quantity: number
}

const ImageDesktop = styled.img`
    width: 32px;
    height: 32px;
    @media (min-width: ${size.tablet}) {
        width: 64px;
        height: 64px;
    }
`

const IngridientOrder: React.FC<IngridientTypeOrders> = ({
    photo,
    price,
    nameItem,
    quantity,
}) => {

    return (
            <IngrOrder>
                <BoxTitle>
                    <div>
                        <ImageDesktop src={`http://localhost:5555${photo}`} width={64} height={64} alt="Crator" />
                    </div>
                    <BoxName>{nameItem}</BoxName>
                </BoxTitle>
                <Box>
                    <Count>{quantity} x {price}</Count>
                    <PriceImg/>
                </Box>
            </IngrOrder>
    )
}

export default IngridientOrder