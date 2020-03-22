import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare, faPenSquare } from "@fortawesome/free-solid-svg-icons";
import { TEXT_COLOR } from "../components/global";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;

const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;

  a:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

const SocialMediaIcon = styled(FontAwesomeIcon)`
  color: ${TEXT_COLOR};
  transition: transform 0.1s;

  &:hover {
    transform: scale(1.5);
    opacity: 0.7;
  }
`;

export default function Footer(props) {
  return (
    <Container id="contact">
      <SocialMediaContainer>
        <a href="https://github.com/omgitsfrancis/" title="Github">
          <SocialMediaIcon icon={faGithubSquare} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/francis-enriquez/"
          title="LinkedIn"
        >
          <SocialMediaIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="mailto:francisdenriquez@gmail.com" title="Email">
          <SocialMediaIcon icon={faEnvelopeSquare} size="2x" />
        </a>
        <a href="https://francis-enriquez-resume.netlify.com/" title="Resume">
          <SocialMediaIcon icon={faPenSquare} size="2x" />
        </a>
      </SocialMediaContainer>
    </Container>
  );
}
