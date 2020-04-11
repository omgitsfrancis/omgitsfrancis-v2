import { useState, useEffect } from "react";
import styled from "styled-components";
import { Section, SectionTitle } from "../components/section";
import { Project } from "../components/project";
import { TEXT_COLOR } from "../components/global";

const CodeSection = styled(Section)`
  display: flex;
  flex-direction: column;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  & > div {
    margin-bottom: 1rem;
  }
`;

const MoreCodeButton = styled.button`
  border: 1px solid ${TEXT_COLOR};
  color: ${TEXT_COLOR};
  background-color: white;
  border-radius: 4px;
  margin-top: 1.5rem;
  font-size: 16px;
  font-weight: 500;
  padding: 0.5rem 1rem;
  align-self: center;
  cursor: pointer;
  outline: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default function Code() {
  const [repos, setRepos] = useState({});
  const [showNum, setShowNum] = useState(6);
  const [repoCount, setRepoCount] = useState(0);
  const INCREMENT = 6;

  useEffect(() => {
    getRepos().then(data => {
      setRepoCount(data.length);
      setRepos(
        data
          .filter(i => {
            return !i.fork;
          })
          .slice(0, showNum)
      );
    });
  }, [showNum]);

  async function getRepos() {
    const response = await fetch(
      "https://api.github.com/users/omgitsfrancis/repos?sort=created&direction=desc"
    );
    return await response.json();
  }

  const handleMoreCodeOnClick = () => {
    setShowNum(showNum + INCREMENT);
  };

  return (
    <CodeSection id="code">
      <SectionTitle>Code</SectionTitle>
      <ProjectsContainer>
        {repos.length > 0 &&
          repos.map((repo, index) => (
            <Project
              title={repo.name}
              description={repo.description}
              projectLink={repo.homepage}
              gitLink={repo.html_url}
              language={repo.language}
              key={index}
            />
          ))}
      </ProjectsContainer>
      {repoCount - INCREMENT > showNum && (
        <MoreCodeButton onClick={handleMoreCodeOnClick}>
          More Code
        </MoreCodeButton>
      )}
    </CodeSection>
  );
}
