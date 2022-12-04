import styled from "styled-components";

export const Container = styled.div`
    /* width: 100%; */
    .form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        &-content{
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin-bottom: 1rem ;
            &-required{
                display: flex;
                flex-direction: column;
                p{
                    height: 1rem;
                    color: ${props => props.theme.colors.secondary};
                }
            }
        }
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};

    input{
        background: #fff;
        color: #8696a0;
        border-radius: 4px;
        height: 30px;
        padding: 4px;
        :focus{
            box-shadow: 0 0 0 3px #5762d5;
            outline: none;
        }
    }
    }
`;