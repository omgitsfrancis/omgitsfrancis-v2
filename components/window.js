import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
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

const Wrapper = styled.div`
  max-width: calc(100% - 4rem);
  width: 64rem;
  margin: 0 auto;
  border-radius: 8px;
  background-color: inherit;
  box-shadow: 0 2px 6px 0 rgba(0,0,0,.2);
  @media (max-width: 768px) {
    max-width: calc(100% - 2rem);
  }
  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

export default function Window(props) {
  const { children, ...rest } = props;
  return (
    <Wrapper {...rest}>
      <GlobalStyles />
      {children}
    </Wrapper>
  );
}
