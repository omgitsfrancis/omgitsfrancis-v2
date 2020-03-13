import styled from "styled-components";

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
      {children}
    </Wrapper>
  );
}
