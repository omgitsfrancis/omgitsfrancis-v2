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
`

const Description =  styled.p`
	font-size: 14px;
`

const ProjectBody = styled.div`
  padding: 0.5rem;
`;

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
        <Title style={{textOverflow: "ellipsis"}}>{title.replace(/-/g, " ")}</Title>
        <div>
          <a href={gitLink}>
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          {projectLink && (
            <a href={projectLink}>
              <FontAwesomeIcon
                style={{ marginLeft: "0.5rem" }}
                icon={faExternalLinkAlt}
                size="lg"
              />
            </a>
          )}
        </div>
      </ProjectHeader>
      <ProjectBody>
        <Description>{description}</Description>
      </ProjectBody>
    </ProjectContainer>
  );
}
