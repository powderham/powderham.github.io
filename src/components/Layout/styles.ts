import styled, { createGlobalStyle } from "styled-components";
import {
  alpha,
  beta,
  delta,
  epsilon,
  fontMonospace,
  fontSans,
  gama,
  mobile,
  tablet,
} from "../../constants/variables";

export const GlobalStyle = createGlobalStyle`
body, html {
	font-size: 62.5%;
	}

body {
	line-height: 1;
	font: 16px ${fontSans};
	color: ${alpha}
	}

h1, h2, h3, h4 {
	font-family: ${fontSans};
	color: ${beta};
	-webkit-font-smoothing: antialiased;
	text-rendering: optimizeLegibility;
	};

h1{
	font-size: 3rem;
	letter-spacing: -1px;
	color: ${beta};
	font-weight: 700;}

h2{
	font-size: 2.2rem}

h3{
	font-size: 2rem}

h4{
	font-size: 1.6rem}

a{
	color: ${delta};
	text-decoration: underline;
}
p {line-height: 1.7;
	color: ${alpha};
	font-weight: 300;
	margin-bottom: 20px;
	letter-spacing: 0.4px;

	@media ${mobile} {
		letter-spacing: 0.2px}
    }

strong{
	font-weight: 400;
	color: #000;
    }

ul,
ol{
	li {
		line-height: 2.4rem;
		font-weight: 300;
		color: ${alpha}
       }
}

img,
pre,
iframe
	{max-width: 100%}

img,
pre {border-radius: 4px}

figcaption {
    position: relative;
	top: -20px;
	left: 0;
	right: 0;
	margin: 0 auto;
	width: 100%;
	text-align: center;
	font-size: 1.3rem;
	color: ${gama};
	font-weight: 300;

	@media ${mobile} {
        font-size: 1.2rem;
        }
}
blockquote {padding-left: 15px;
	border-left: 3px solid #eee;}

hr	{border: none;
	height: 1px;
	margin: 40px auto;
	background: #eee;
	width: 100%;}

figure.highlight{
	width: 100%;
	margin: 0;}

code,
tt {	padding: 1px 0;
	font-family: ${fontMonospace};
	font-size: 12px;
	line-height: 20px;
	background: #fff;
	border-radius: 2px;
	border-radius: 2px;
}
pre {box-sizing: border-box;
	margin: 0 0 1.75em 0;
	width: 100%;
	padding: 5px 10px;
	font-family: ${fontMonospace};
	font-size: 1.2rem;
	line-height: 2rem;
	overflow: auto;
	background: #fff;
	border: 1px solid ${epsilon};
	border-radius: 2px;}


height: 100%;
width: 96%;
margin: 0 auto;

`;

export const WrapperStyle = styled.div<{ isNormalWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${mobile} {
    width: 88%;
  }

  @media ${tablet} {
    width: 88%;
  }
`;

export const ContentStyle = styled.div<{ isNormalWidth?: boolean }>`
  max-width: ${({ isNormalWidth }) => (isNormalWidth ? "560px" : "810px")};
`;
