import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            primary: string,
            secondary: string,

            background: string,
            text: string,
            textSecondary: string,

            boxShadow: string,

            titleDark: string,
            titleLight: string,
        },
    }
}