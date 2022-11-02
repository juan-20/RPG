import styled from "styled-components";

type InputProps = {
    size: any
}

export const InputStyle = styled.input<InputProps>`
    background: #fff;
    color: #8696a0;
    border: 1px solid #000;
    border-radius: 4px;
    width: ${props => props.size};
    height: 30px;
    padding: 4px;
`;