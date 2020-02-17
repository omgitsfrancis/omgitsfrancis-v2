import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  color: white;
  animation: fadein 2s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Title = styled.h1`
  font-size: 72px;
  text-align: center;
`

export default function Header(props) {
  return (
    <Container>
      
      <Title>Francis Enriquez</Title>
      <p style={{ marginBottom: "3rem" }}>
        "There is no one who loves pain itself,
        <br /> who seeks after it and wants to have it,
        <br /> simply because it is pain..."
      </p>
      <FontAwesomeIcon icon={faArrowDown} size="4x" />
    </Container>
  );
}
