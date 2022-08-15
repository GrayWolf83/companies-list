import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

    *, *:before, *:after {
        box-sizing: border-box;
    }

    html, body {
        min-height: 100vh;
        margin:0;
        color: #fff;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
        Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
        background-color: rgb(56,55,55);
        line-height: 1.4;
        background-image: url('bg.jpeg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }

    a {
        text-decoration: none;
    }

    a:link, a:visited {
        color: #fff;
    }

    a:hover, a:focus {
        color: #aaa;
    }

    code, pre {
        max-width: 100%;
    }

    h1, h2, h3, h4, p {
        margin: 0;
    }
`
