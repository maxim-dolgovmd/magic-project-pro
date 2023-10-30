import React from "react";
import ArrowUp from '../../../public/arrow-up-solid-two.svg'
import styled from "styled-components";
import { windowAutoScroll } from "@/components/utils/windowAutoScroll";
import { useSelector } from "react-redux";
import { ToScrollSelect } from "@/components/redux/slices/storageSlice";

type ScrollType = {
    scrollActive?: boolean
}

const BoxScroll = styled.div`
    position: fixed;
    width: 80px;
    bottom: 100px;
    right: 50px;
    z-index: 300;
    opacity: 0.3;
    cursor: pointer;
    svg {
        fill: #8585AD;
    }

    ${(props: ScrollType) => {
        return props.scrollActive && {
            display: 'none'
        }
    }};
`

const ScrollComponent: React.FC = () => {

    const {toScroll} = useSelector(ToScrollSelect)
    windowAutoScroll()

    const toScrollOnClick = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }

    return (
        <BoxScroll scrollActive={toScroll} onClick={toScrollOnClick}>
            <ArrowUp/>
        </BoxScroll>
    )
}

export default ScrollComponent