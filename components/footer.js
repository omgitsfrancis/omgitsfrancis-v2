import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare} from "@fortawesome/free-solid-svg-icons";

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
  color: rgb(103, 109, 121);

  &:hover {
    opacity: 0.7;
  }
`;

export default function Footer(props) {
  return (
    <Container id="contact">
      <SocialMediaContainer>
        <a href="https://github.com/omgitsfrancis/">
          <SocialMediaIcon icon={faGithubSquare} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/francis-enriquez/">
          <SocialMediaIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="mailto:francisdenriquez@gmail.com">
          <SocialMediaIcon icon={faEnvelopeSquare} size="2x" />
        </a>
      </SocialMediaContainer>
    </Container>
  );
}
