import styled from "styled-components";

export const Container = styled.div`
      background: ${props => props.theme.colors.background};
      color: ${props => props.theme.colors.text};
      .OneSpell{
          height: 50vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
    .back{
        margin-right: auto; /* 1 */
        margin-left:  auto; /* 1 */

        max-width: 960px; /* 2 */

        padding-right: 10px; /* 3 */
        padding-left:  10px; /* 3 */
        .content{
            display: flex;
            align-items: center;
            gap: 1rem;
            cursor: pointer;
        }
    }
    .main-header{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .input{
            display: flex;
            align-items: center;
            fill: ${props => props.theme.colors.text};
            color: ${props => props.theme.colors.text};
            outline: none;
            input{
                width: 100%;
                height: 100%;
            }
        }
        .autocomplete{
            display: flex;
            flex-direction: column;
        }
    }
    .content{
        margin-right: auto; /* 1 */
        margin-left:  auto; /* 1 */

        max-width: 960px; /* 2 */

        padding-right: 10px; /* 3 */
        padding-left:  10px; /* 3 */
        &-pagination{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 2rem;
            button{
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 1rem;
                background: ${props => props.theme.colors.titleLight};;
                color: #333;
                font-weight: bolder;
                border-radius: 6px;
                padding: 10px;
                border: none;
                :focus{
                    box-shadow: 0 0 0 2.5px #5762d5;
                    outline: none;
                }
                >svg{
                    animation-name: spin;
                    animation-duration: 1000ms;
                    animation-iteration-count: infinite;
                    animation-timing-function: linear; 
                }
                @keyframes spin {
                    from {
                        transform:rotate(0deg);
                    }
                    to {
                        transform:rotate(360deg);
                    }
                }
            }
        }
    }
`;