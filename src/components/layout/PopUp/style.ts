import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: rgba(0,0,0, 0.5);
    .popup{
    &-inner {
        background: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.text};
        border-radius: 5px;
        position: absolute;
        left: 25%;
        right: 25%;
        top: 25%;
        bottom: 25%;
        margin: auto;
    }   
    &-header{
        display: flex;
        justify-content: space-between;
        h1{
            font-size: 25px;
        }
        &-close{
            border: 1px solid ${props => props.theme.colors.text};;
        }
    }
    }
`;