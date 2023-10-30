import { createGlobalStyle} from 'styled-components'

interface ThemeMode {
    [word: string]: string
}

export type GlobalType = {
    theme: ThemeMode
}

export const GlobalStyles = createGlobalStyle`

    body {

    background: ${({ theme }: GlobalType) => theme.body};
    color: ${({ theme }: GlobalType) => theme.text};
    transition: all 0.50s linear;

    }
`