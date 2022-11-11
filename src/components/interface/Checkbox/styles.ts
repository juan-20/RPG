import styled from "styled-components";

interface CheckboxProps{
    isAllowed: string
}

export const Container = styled.section<CheckboxProps>`
    cursor: ${props => props.isAllowed};
    .checked{
        color:  ${props => props.theme.colors.titleLight};
    }
    
`;