import React from 'react'
import { func, string } from 'prop-types';
import styled, { ThemeProvider } from "styled-components"
import { darkTheme, lightTheme } from '../theme/theme';

const ContainerMode = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;

`
const Mode = styled.div`
    background-color: ${({ theme }) => theme.backgroundToogle};
    padding: 8px 12px;
    border-radius: 12px;
    color: ${({ theme }) => theme.text};
    cursor: pointer;
    font-weight: 500;
`

interface PropsType {
    theme: string,
    toggleTheme: () => void
}

const ToggleButton: React.FC<PropsType> = (props) => {
    return (
        <ThemeProvider theme={props.theme === 'light' ? lightTheme : darkTheme}>
            <ContainerMode>
                <Mode onClick={props.toggleTheme} >
                    {props.theme}
                </Mode>
            </ContainerMode>
        </ThemeProvider>
    );
};

ToggleButton.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}
export default ToggleButton;