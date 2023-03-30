import styled from "styled-components";

export const Container = styled.form`
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    padding: 0 10% 0 10%;
    input{
        background: #fff;
        color: #000;
        border-radius: 6px;
        height: 40px;
        padding: 10px;
        border: 1px solid #000;
        :focus{
            box-shadow: 0 0 0 2.5px #5762d5;
            border: none;
            outline: none;
        }
    }
    textarea{
        border-radius: 6px;
        height: 100px;
        padding: 10px;
        border: 1px solid #000;
        :focus{
            box-shadow: 0 0 0 2.5px #5762d5;
            border: none;
            outline: none;
        }
    }
    button{
        padding: 1rem;
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
        :disabled{
            background: #ccc;
            color: #000;
        }
        :not(:disabled){
            background: #388659;
        }
    }
    button[type=submit]{
        background: #5762d5;
    }
    input[type=file]{
        width: 181px;
    }
    .title{
        padding-top: 3rem;
        padding-bottom: 3rem;
    }
    .input-group{
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: center;
        padding: 0.3rem;
    }
    .first-step{
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
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
    .second-step{
        label{
            width: 100px;
            display: flex;
            justify-content: flex-end;
        }
        .saving{
            padding-top: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            &-input{
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 1rem;
                padding: 0.3rem;
                input{
                    background: #fff;
                    color: #8696a0;
                    width: 3rem;
                    border-radius: 6px;
                    height: 40px;
                    padding: 5px;
                    border: 1px solid #000;
                    :focus{
                        box-shadow: 0 0 0 2.5px #5762d5;
                        border: none;
                        outline: none;
                    }
            }
        }
        }
    }
    .button-group{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        gap: 1rem;
        button{
            padding: 1rem;
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
        }
    }
`;