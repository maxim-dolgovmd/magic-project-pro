import React from "react";
import styled from "styled-components";

const Box = styled.div`
    position: fixed;
    bottom: 30px;
    right: 30px;
    transition: all 300ms ease 0s;
`

const BlockWindow = styled.div`
    padding: 12px 16px;
    border-radius: 24px;
    background-color: #3fc221;
    color: #f2f2f3;
`

type PropsType = {
    text: string
}

const PopUpWindow: React.FC<PropsType> = ({text}) => {
    return (
        <Box>
            <BlockWindow>{text}</BlockWindow>
        </Box>
    )
}

export default PopUpWindow