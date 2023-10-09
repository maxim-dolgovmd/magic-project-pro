import React, { useState } from "react";
import styled from 'styled-components'
import Link from "next/link";
import { device } from "../device/device";

import Burger from '../../assets/icon/burger.svg'
import ViewList from '../../assets/icon/view-list.svg'
import Profile from '../../assets/icon/profile.svg'
import IconDown from '../../../public/iconDown.svg'
import IconUp from '../../../public/iconUp.svg'
import { AddCartSelect } from "@/components/redux/slices/addCartSlice";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useAppDispatch } from "@/components/redux/store";
import { setIsMenuClicked } from '../../redux/slices/addCartSlice'
import { StorageSelect, setUser } from "@/components/redux/slices/storageSlice";

type AciveButton = {
    active?: any
    access?: any
}

type AciveImage = {
    active?: any
}

const Window = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #1C1C21;
    display: flex;
    padding: 50px 15px;
`

const Block = styled.div`
    margin: 32px 0 16px 0;
    width: 100%;
`

const BoxBlock = styled.div`
    display: flex;
    gap: 8px;
    text-align: left;
    color: #8585AD;
    padding: 16px 0px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    cursor: pointer;

    &:hover {
        color: #F2F2F3;
        svg path {
            fill: #F2F2F3;
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
`

const AccountBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const ListIcon = styled.ul`
    overflow: hidden;
    max-height: 0;
    transition: 0.5s ease-out;

    ${(props: { activeList: boolean }) => {
        return (
            props.activeList && {
                maxHeight: '100vh',
                transition: '0.5s ease-in'
            });
    }}
`

const AccountBlock = styled.div`

${(props: AciveButton) => {
    return (
    props.access && {
        display: 'none'
    }
    );
}}
`

const OrderAccsess = styled.div`
    display: none;

    ${(props: AciveButton) => {
        return (
            props.access && {
                display: 'flex'
            }
        )
    }}
`
  
const Button = styled.div`
display: flex;
font-weight: 400;
font-size: 16px;
line-height: 20px;
align-items: center;
padding: 15px 0 15px 32px;
color: #8585ad;

span:hover {
    cursor: pointer;
    color: #f2f2f3;
}

${(props: AciveButton) => {
    return (
    props.active && {
        color: "#F2F2F3",
    }
    );
}}
`;

const IconActive = styled.div`
    ${(props: AciveButton) => {
    return (
    props.active && {
        display: 'none'
    }
    );
}}
`
  

const Navbar = () => {

    const { isMenuClicked } = useSelector(AddCartSelect)
    const router = useRouter()
    const dispatch = useAppDispatch()
    const {user} = useSelector(StorageSelect)
    const [activeList, setActiveList] = useState(false)
    console.log(user)

    const activeFuncList = () => {
        if (!user) {
            router.push('registration/sign-in')
            dispatch(setIsMenuClicked(false))
        } else {
            setActiveList(!activeList)
        }
    }

    const exitTheAccount = () => {
        if (window.confirm('Вы действительно хотите выйти с личного кабинета ?')) {
          window.localStorage.removeItem('token')
          dispatch(setUser(''))
          dispatch(setIsMenuClicked(false))
          router.push('/')
        }
      }

    return (
        <Window >
            <Block>
                <AccountBlock>
                    <AccountBox onClick={activeFuncList}>
                        <div >
                            <BoxBlock >
                                <Profile />
                                <div>Личный кабинет</div>
                            </BoxBlock>
                        </div>
                        <IconActive active={!user}>
                            {activeList ? <IconUp /> : <IconDown />}
                        </IconActive>
                    </AccountBox>
                    <ListIcon activeList={activeList}>
                        <li>
                            <Button>
                                <Link 
                                    href={"/account/profile"} 
                                    onClick={() => dispatch(setIsMenuClicked(false))}
                                >
                                    <span>Профиль </span>
                                </Link>
                            </Button>
                        </li>
                        <li>
                            <Button >
                                <Link 
                                    href={"/account/order-history"} 
                                    onClick={() => dispatch(setIsMenuClicked(false))}
                                >
                                    <span>История заказов </span>
                                </Link>
                            </Button>
                        </li>
                        <li>
                            <Button onClick={exitTheAccount}>
                                <span>Выход</span>
                            </Button>
                        </li>
                    </ListIcon>
                </AccountBlock>
                <div>
                    <Link 
                        href={'/'} 
                        onClick={() => dispatch(setIsMenuClicked(false))}
                    >
                        <BoxBlock>
                            <Burger />
                            <div>Конструктор бургеров</div>
                        </BoxBlock>
                    </Link>
                </div>
                <OrderAccsess access={user==='admin@admin.com'}>
                    <Link 
                        href={'/feed'} 
                        onClick={() => dispatch(setIsMenuClicked(false))}
                    >
                        <BoxBlock >
                            <ViewList />
                            <div>Лента заказов</div>
                        </BoxBlock>
                    </Link>
                </OrderAccsess>
            </Block>
        </Window>
    )
}

export default Navbar