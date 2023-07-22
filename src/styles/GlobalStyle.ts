import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;
    }

    body {
        background-color: #ffffff;
        font-family: 'Pretendard';
        
        position: absolute;
        height: 100%;
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    a {
        color: inherit;
        text-decoration: none;
        cursor: pointer;
    }

    input, button {
        background-color: transparent;
        border: none;
        outline: none;
    }
    
    img {
        display: block;
        width: 100%;
        height: 100%;
    }
    
    
`;

export default GlobalStyle;
