import styled from "styled-components";

export const Container = styled.div`
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    padding: 0 15% 0 15%;
    .title{
        padding-top: 3rem;
        padding-bottom: 3rem;
    }
    .form{
        background: ${props => props.theme.colors.primary};
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h2{
            padding-top: 1.5rem;
            padding-bottom: 1.5rem;
        }
    .personal-information{
            display: flex;
            align-items: center;
            gap: 2rem;

            @media only screen and (max-width: 780px) {
                flex-direction: column;
            }
    }
    .form-content{
        display: flex;
        flex-direction: column;
        height: 100px;
    }

    input{
        background: #fff;
        color: #8696a0;
        border-radius: 6px;
        height: 40px;
        padding: 10px;
        border: none;
        :focus{
            box-shadow: 0 0 0 2.5px #5762d5;
            outline: none;
        }
    }
    input[type=file]{
        background: #5762d5;
        display: flex;
        justify-content: center;
    }
    p{
        color: red;
    }
    .accordion{
        width: 80%;
        >div{
        gap: 0.5rem;
        .text{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding-top: 1.5rem;
            &-description{
                display: flex;
                justify-content: center;
                gap: 3rem;
            }
        }
        .input{
            display: flex;
            justify-content: center;
            gap: 3rem;
            input{
                width: 60px;
            }
        }
        }
    }
    }
`;