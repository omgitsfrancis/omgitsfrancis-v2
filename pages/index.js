import styled from "styled-components";
import Navbar from "../components/navbar";
import Window from "../components/window";
import Header from "../components/header";
import Footer from "../components/footer";
import Project from "../components/project";
import { useState, useEffect } from "react";

const Body = styled.div`
  padding-top: 5rem;
`;

const Section = styled.div`
  padding-top: 5rem;
  margin: 0 5rem;
  @media (max-width: 480px) {
    margin: 0 2rem;
  }
`;

const SectionTitle = styled.h1`
  text-align: center;
  font-weight: 300;
  margin-bottom: 2rem;
`;

const Projects = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  & > div {
    margin-bottom: 1rem;
  }
`;

export default function Index() {
  const [repos, setRepos] = useState({});

  useEffect(() => {
    getRepos().then(data => {
      setRepos(data.slice(0, 7));
    });
  }, []);

  async function getRepos() {
    const response = await fetch(
      "https://api.github.com/users/omgitsfrancis/repos?sort=created&direction=desc"
    );
    return await response.json();
  }

  return (
    <>
      <Header />
      <Window>
        <Navbar />
        <Body>
          <Section id="about">
            <SectionTitle>Section 1</SectionTitle>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Section>
          <Section id="experience">
            <SectionTitle>Section 2</SectionTitle>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p> <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p> <p>Home</p>
          </Section>

          <Section id="code">
            <SectionTitle>Code</SectionTitle>
            <Projects>
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
            </Projects>
          </Section>
        </Body>
      </Window>
      <Footer />
    </>
  );
}
