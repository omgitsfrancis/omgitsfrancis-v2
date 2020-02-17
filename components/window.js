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
		color: white;
		background-color: #5f4d93;
		font-family: "Source Sans Pro", Helvetica, sans-serif;
		font-weight: 300;
	}
`;

const Wrapper = styled.div`
  max-width: calc(100% - 4rem);
  width: 64rem;
  margin: 0 auto;
  border-radius: 8px;
  background-color: gray;
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
