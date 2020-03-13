import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faEnvelopeSquare,
  faFile
} from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

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
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 42px;
  }
`;

const HoverText = styled.span`
  &:hover {
    cursor: default;
    opacity: 0.7;
  }
`;

const SocialMediaContainer = styled.div`
  position: absolute;
  right: 0;

  a:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

const SocialMediaIcon = styled(FontAwesomeIcon)`
  transition: transform 0.1s;

  &:hover {
    transform: scale(1.5);
    opacity: 0.7;
  }

  @keyframes bounce {
    from {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
    to {
      transform: translateY(0);
    }
  }
`;

const ViewMoreIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  transition: transform 0.25s ease 0s;
  &:hover {
    transform: translateY(10px);
    opacity: 0.7;
  }
`;

export default function Header(props) {
  return (
    <Container>
      <div style={{ position: "relative" }}>
        <SocialMediaContainer>
          <a href="https://github.com/omgitsfrancis/">
            <SocialMediaIcon
              icon={faGithubSquare}
              style={{ animation: "bounce 0.2s linear 1s" }}
              size="sm"
            />
          </a>
          <a href="https://www.linkedin.com/in/francis-enriquez/">
            <SocialMediaIcon
              icon={faLinkedin}
              style={{ animation: "bounce 0.2s linear 1.1s" }}
              size="sm"
            />
          </a>
          <a href="mailto:francisdenriquez@gmail.com">
            <SocialMediaIcon
              icon={faEnvelopeSquare}
              style={{ animation: "bounce 0.2s linear 1.2s" }}
              size="sm"
            />
          </a>
        </SocialMediaContainer>
        <p>
          <HoverText>Hello, </HoverText>
          <HoverText>I'm</HoverText>
        </p>
        <Title>
          {"Francis Enriquez".split("").map((letter, index) => {
            return <HoverText key={index}>{letter}</HoverText>;
          })}
        </Title>
      </div>
      <p style={{ marginBottom: "3rem" }}>
        {['tester, ', 'developer, ', 'and, ', 'all ','of ', 'the ', 'above'].map((word, index) => {
          return <HoverText key={index}>{word}</HoverText>
        })}
      </p>
      <a href="#about">
        <ViewMoreIcon icon={faArrowDown} size="4x" />
      </a>
    </Container>
  );
}
