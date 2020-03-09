import { useEffect, useState } from "react";
import styled from "styled-components";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(33% - 1rem);
  margin-bottom: 1.5rem;

  @media (max-width: 1024px) {
    width: calc(50% - 1rem);
  }
  @media (max-width: 768px) {
    width: calc(100% - 1rem);
  }
`;
const ProjectHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
`;

const Title = styled.span`
  font-size: 18px;
  text-overflow: ellipsis;
  font-weight: 500;
`;

const Description = styled.p`
  font-size: 14px;
`;

const ProjectBody = styled.div`
  padding: 0.5rem;
`;

const Icon = styled(FontAwesomeIcon)`
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`

export default function Project({
  title,
  description,
  gitLink,
  projectLink,
  pic,
  ...props
}) {
  return (
    <ProjectContainer>
      <ProjectHeader>
        <Title>
          {title}
        </Title>
        <div>
          {projectLink && (
            <a href={projectLink}>
              <Icon
                style={{ marginRight: "0.5rem" }}
                icon={faExternalLinkAlt}
                size="lg"
              />
            </a>
          )}
          <a href={gitLink}>
            <Icon icon={faGithub} size="lg" />
          </a>
        </div>
      </ProjectHeader>
      <ProjectBody>
        <Description>{description}</Description>
      </ProjectBody>
    </ProjectContainer>
  );
}
