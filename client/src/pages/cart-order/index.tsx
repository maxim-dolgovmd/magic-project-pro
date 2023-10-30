import React from "react";
import styled, { ThemeProvider } from 'styled-components'

import Close from '../../../public/closeIcon.svg'
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useAppDispatch } from "@/components/redux/store";
import Image from "next/image";
import Button from "@/components/components/button/button";

import {
    setActiveOrder,
    setDeleteOrder,
    AddCartSelect,
    setCartActive,
} from "../../redux/slices/addCartSlice";
import { usePostOrderMutation } from "@/components/services/ordersApi";
import IngridientBurger from "@/components/components/ingridient/ingridientBurger";
import { device } from "@/components/components/device/device";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import useDeviceHeight from "@/components/utils/useDeviceHeight";
import { StorageSelect, ThemeModeSelect } from "@/components/redux/slices/storageSlice";
import { darkTheme, lightTheme } from "@/components/components/theme/theme";


const Window = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    z-index: 301;
`

const Block = styled.div`
    background: ${({ theme }) => theme.body};
    width: 100%;
`

const BoxHeader = styled.div`
    display: flex;
    padding: 16px;
    justify-content: space-between;
    align-items: center;

    >div svg path {
        fill: ${({ theme }) => theme.titleOrder}
    }
`

const TitleMenu = styled.div`
    font-weight: 700;
    font-size: 28px;
    font-family: 'JetBrains Mono';
    line-height: 32px;
    padding: 8px 0;
    color: ${({theme}) => theme.titleOrder};
`

const ViewOrder = styled.div`
    position: fixed;
    bottom: 0;
    z-index: 20;
    width: 100%;
    background-color: ${({ theme }) => theme.backgroundWrapper};
`

const BoxOrder = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    justify-content: center;
    padding: 16px 15px 16px 0;
`;

const BoxSum = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  & > div {
    font-size: 20px;
    font-weight: 400;
    line-height: 18px;
    color: ${({theme}) => theme.colorOrder};
  }
`;

const BurgerMobile = styled.div`
    display: flex;
    padding: 16px 8px 16px 0;
    gap: 12px;
    align-items: center;
    justify-content: space-around;
    @media ${device.mobileL} {
        gap: 8px;
    }
`

const Band = styled.div`
    height: 1px;
    width: 100%;
    background-color: white;
`

const CloseImg = styled(Close)`
    cursor: pointer;
`

const CardBurgerMobile = () => {

    const themeMode = useSelector(ThemeModeSelect)
    const { sumProduct, addProduct } = useSelector(AddCartSelect);

    const [createOrder] = usePostOrderMutation()

    const {user} = useSelector(StorageSelect)
    const router = useRouter()
    const dispatch = useAppDispatch()

    const isProduct = {
        addProduct,
        role: 'user',
    }
    const {heightMobile} = useDeviceHeight()
    const ScrollMobile = Number(heightMobile) - 152
    console.log(ScrollMobile)

    const closeOrderFunc = () => {
        router.push('/')
        dispatch(setCartActive(false))
    }

    const createOrderFunc = () => {
        if (!user) {
            alert('Для создания заказа необходимо авторизоваться')
        } else {
            closeOrderFunc()
            dispatch(setActiveOrder(true))
            dispatch(setDeleteOrder())
            createOrder(isProduct)
        }
    }


    return (
        <ThemeProvider theme={ themeMode === 'light' ? darkTheme : lightTheme}>
        <Window>
            <Block>
                <div>
                    <BoxHeader>
                        <TitleMenu>Заказ</TitleMenu>
                        <div onClick={closeOrderFunc}>
                            <CloseImg />
                        </div>
                    </BoxHeader>
                    <OverlayScrollbarsComponent>
                        <div style={{height: `${String(ScrollMobile)}px`}}>
                            {addProduct.length > 0 ?
                                addProduct.map((obj, index) => {
                                    return (
                                        // eslint-disable-next-line react/jsx-key
                                        <div  >
                                            <BurgerMobile>
                                                <IngridientBurger
                                                    photo={obj?.mobilePhotoUrl}
                                                    nameItem={obj?.name}
                                                    price={obj?.price}
                                                    index={index}
                                                />
                                            </BurgerMobile>
                                            <Band></Band>
                                        </div>
                                    )
                                })
                                : (
                                    <div>Ваша корзина пуста</div>
                                )}
                        </div>
                    </OverlayScrollbarsComponent>
                    <ViewOrder>
                        <BoxOrder>
                            <BoxSum>
                                <div>{sumProduct}</div>
                                <Image src="/price.svg" width={24} height={24} alt="PriceSvg" />
                            </BoxSum>
                            <Button
                                size="small"
                                onClick={createOrderFunc}
                                disabled={addProduct.length === 0}
                            >
                                Оформить заказ
                            </Button>
                        </BoxOrder>
                    </ViewOrder>
                </div>
            </Block>
        </Window>
        </ThemeProvider>
    )
}

export default CardBurgerMobile