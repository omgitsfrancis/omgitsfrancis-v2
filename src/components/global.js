
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
	html {
		scroll-behavior: smooth;
	}
  body {
		box-sizing: border-box;
		color: rgb(103, 109, 121);
		background-color: white;
		font-family: "Source Sans Pro", Helvetica, sans-serif;
		font-weight: 300;
	}
  a {
    color: rgb(103, 109, 121);
  }
`;