import { createGlobalStyle } from "styled-components";
import("https://fonts.googleapis.com/css2?family=Nunito");

export const GlobalStyle = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
    font-family: 'Nunito', sans-serif;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

html{
    background-color: #212529;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

 :root{
    --main-color: #3980d3;
    --second-color:#6096BA;
    --branco: #FFFFFF;
    --cinza-1: #F8F9FA;
    --cinza-2: #545658;
    --cinza-3: #343A40;
    --cinza-4: #212529;

    --font-family: 'Nunito', sans-serif;

    /* Títulos */
    --title-weight-bold: bold;
    --title-1-font-size: 30px;
    --title-2-font-size: 22px;
    --title-3-font-size: 16px;
    --title-4-font-size: 12px;

    /* Cabeçalhos */
    --headline-font-weight: normal;
    --headline-font-size: 16px;

    /* Corpo */
    --body-font-weight: normal;
    --body-font-size: large;
 }
`;
