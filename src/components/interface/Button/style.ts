import styled from "styled-components";
import {darken} from 'polished'

interface ButtonProps{
    backgroundColor: string
    size: string
  }
  

export const CustomButton = styled.button<ButtonProps>`
    background: ${props => props.backgroundColor};
    min-width: ${props => props.size};
    height: 2rem;
    color: #fff;
    cursor: pointer;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4vw;
    outline: inherit;
    border: none;
    @media only screen and (min-width: 450px) {
        font-size: 1rem;
    }
    i{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 20px;
        width: 20px;
    }
    :hover{
        filter: brightness(80%)
    }
    :focus{
        border: 1px solid #333;
    }
`;