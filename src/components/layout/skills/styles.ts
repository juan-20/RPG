import styled from "styled-components";

export const Container = styled.div`
    width: 100px;
    .content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        #adder{
            padding: 1rem;
        }
        >span{
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 20px;
        }
    }
`;