import styled from "styled-components";
import {darken} from 'polished'

interface ButtonProps{
    backgroundColor: string
  }
  

export const CustomButton = styled.button<ButtonProps>`
    background: ${props => props.backgroundColor};
    min-width: 150px;
    padding: 0.7rem;
    color: #fff;
    cursor: pointer;
    border-radius: 4px;
    :hover{
        filter: brightness(150%);
    }
`;