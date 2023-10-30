import React from "react";
import styled, { ThemeProvider } from 'styled-components'

import Burger from '../../assets/icon/burger.svg'
import ViewList from '../../assets/icon/view-list.svg'
import Profile from '../../assets/icon/profile.svg'
import Logo from '../../assets/icon/logo.svg'
import LogoMobile from '../../assets/icon/logoMobile.svg'
import Container from '../container/container'
import Link from "next/link";
import { device, size } from "../device/device";
import HeaderMobile from "./headerMobile";
import { useSelector } from "react-redux";
import { AddCartSelect } from "@/components/redux/slices/addCartSlice";
import {StorageSelect } from "@/components/redux/slices/storageSlice";
import { darkTheme, lightTheme } from "../theme/theme";
import { useLightMode } from "@/components/hooks/useLightMode";
import ToggleButton from "../button/toogleButton";
import { GlobalStyles } from "../global/globalStyles";


type ActiveOrder = {
    activeOrder: boolean
}

const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.backgroundWrapper};
    /* background-color: #a1a1d5; */
    z-index: 300;
    position: fixed;
    width: 100%;

    @media ${device.tablet} {
        ${(props: ActiveOrder) => {
            return props.activeOrder && {
                display: 'none'
            }
        }};
    }
`;


const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4px;
    padding: 16px 0;
   
   @media ${device.laptop} {
        grid-template-columns: 3fr 1fr 3fr;
    }
    @media ${device.tablet} {
        display: none;
    }
`

type AciveImage = {
    active?: boolean
    admin?: boolean
}

const Box = styled.div`
    display: flex;
    justify-content: flex-start;
`
const BoxBlock = styled.div`
    display: flex;
    gap: 8px;
    /* color: #8585AD; */
    color: ${({ theme }) => theme.headerText};
    padding: 16px 20px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    cursor: pointer;

    svg path {
        fill: ${({ theme }) => theme.headerText};
    }

    &:hover {
        color: ${({ theme }) => theme.hoverText};
        svg path {
            fill: ${({ theme }) => theme.hoverText};
    }
    }

    ${(props: AciveImage) => {
        return props.active && {
            color: '#F2F2F3',
            path: {
                fill: '#F2F2F3'
            }
        }
    }};

    @media ${device.laptopL} {
        padding: 16px 12px
    }

    @media ${device.laptop} {
        padding: 16px 8px
    }
    
`

const BoxAdminBlock = styled(BoxBlock)`
    display: none;
    ${(props: AciveImage) => {
        return props.admin && {
            display: 'flex'
        }
    }};
`

const BoxLogo = styled.div`
    display: none;

    @media (min-width: ${size.laptop}) {
        display: flex;
        color: #F2F2F3;
        align-items: center;
        justify-content: center;
    }
`

const BoxLogoMobile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: ${size.laptop}) {
        display: none;
    }
`

const StyledLink = styled(Link)`
    display: flex;
    justify-content: flex-end;
`

const MobileBox = styled.div`
    @media (min-width: ${size.tablet}) {
        display: none;
    }
`

const BlockMode = styled.div`
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    justify-content: space-between;
`

const ContainerMode = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;

`

const isBrowser = () => typeof window !== 'undefined';

const Header = () => {

    const {theme, themeToggler, mountedComponent} = useLightMode();
    const themeMode = theme === 'light' ? darkTheme : lightTheme;
    console.log(typeof(themeMode))

    const {activeOrder, activeIngr } = useSelector(AddCartSelect);
    const {user} = useSelector(StorageSelect)
    console.log(themeToggler)

    if (isBrowser()) {
        const screenWidth = window.screen.width
        console.log(screenWidth)
    }

    if (!mountedComponent) return <div/>

    return (
        <ThemeProvider theme={themeMode}>
            <Wrapper activeOrder={activeOrder || activeIngr}> 
                <GlobalStyles/>
                <Container>
                    <Grid>
                        <Box>
                            <Link href={'/'}>
                                <BoxBlock>
                                    <Burger />
                                    <div>Конструктор</div>
                                </BoxBlock>
                            </Link>
                            <Link href={'/feed'}>
                                <BoxAdminBlock admin={user==='admin@admin.com'}>
                                    <ViewList />
                                    <div>Лента заказов</div>
                                </BoxAdminBlock>
                            </Link>
                        </Box>
                        <BoxLogo>
                            <Logo />
                        </BoxLogo>
                        <BoxLogoMobile>
                            <LogoMobile />
                        </BoxLogoMobile>
                        <BlockMode>
                            <ToggleButton theme={theme} toggleTheme={themeToggler}/>
                            {
                                user?.length > 0 ? (
                                    <StyledLink  href={'/account/profile'}>
                                        <BoxBlock >
                                            <Profile />
                                            <div>Личный кабинет</div>
                                        </BoxBlock>
                                    </StyledLink>
                                ) : (
                                    <StyledLink  href={'/registration/sign-in'}>
                                        <BoxBlock >
                                            <Profile />
                                            <div>Авторизоваться</div>
                                        </BoxBlock>
                                    </StyledLink>
                                )
                            }
                        </BlockMode>
                    </Grid>
                    <MobileBox>
                        <HeaderMobile />
                    </MobileBox>
                </Container>
            </Wrapper>
        </ThemeProvider>
    )
}

export default Header