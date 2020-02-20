import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-size: 24px;
  margin: 1rem;
  align-items: center;
  justify-content: center;
  color: inherit;
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
`;

const ViewMoreIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  transition: transform 0.25s ease 0s;
  &:hover {
    transform: translateY(5px);
  }
`

export default function Header(props) {
  return (
    <Container>
      <div>
        <p>Hello, I'm</p>
        <Title>Francis Enriquez</Title>
      </div>
      <p style={{ marginBottom: "3rem" }}>
        tester, developer, and all of the above
      </p>
      <a href="#about">
        <ViewMoreIcon icon={faArrowDown} size="4x" />
      </a>
    </Container>
  );
}
