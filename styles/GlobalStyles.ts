import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap');

*{
    margin: 0px;
    margin: 0px;
    box-sizing: border-box;
    /* transition: 0.08s linear; */
    :focus{
      border: 2px solid #000;
    }

    p{
      font-size: 1rem;
    }

    .Toastify__toast{
        background: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.text};
        >button{
            svg{
                fill: ${props => props.theme.colors.text};
            }
        }
    }    
  }
  html, #root, body{
    height: 100%;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }
  
main{
    padding: 1rem;
}

*, button, input {
  font-family: 'Montserrat', sans-serif;


    /* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
}

.center{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

`;