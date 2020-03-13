import styled from "styled-components";
import { Section, SectionTitle } from "../components/section";
import { Project } from "../components/project"

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  & > div {
    margin-bottom: 1rem;
  }
`;

export default function Code({repos}) {

    return (
        <Section id="code">
            <SectionTitle>Code</SectionTitle>
            <ProjectsContainer>
              {repos.length > 0 &&
                repos.map(
                  (repo, index) =>
                    !repo.fork && (
                      <Project
                        title={repo.name}
                        description={repo.description}
                        projectLink={repo.homepage}
                        gitLink={repo.html_url}
                        key={index}
                      />
                    )
                )}
            </ProjectsContainer>
          </Section>
    )
}