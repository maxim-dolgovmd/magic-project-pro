import React from "react";
import styled from 'styled-components'
import css from "styled-jsx/css";

type categoryType = {
    id: number,
    category: string,
}

type TabType = {
    status: boolean
    // onClick: () => void
    // children: string
}

const Tab = styled.button<TabType>`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({theme}) => theme.ingridientTextBox};
    background: ${({ theme }) => theme.body};
    cursor: pointer;
    
    
    ${(props): any => {
        return props.status
            ? css
                `
                    color: #4C4CFF;
                    box-shadow: inset 0px -2px 0px #4C4CFF;
                    padding: 16px 40px;
                    
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 24px;
                `
            : css
                `
                    color: {({ theme }) => theme.text};
                    box-shadow: inset 0px -2px 0px #8484af;
                    padding: 16px 40px;
                    
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 24px;
                `
    }};
`
export default React.memo(Tab)

