import styled from "styled-components";
import Navbar from "../components/navbar";
import Window from "../components/window";
import Header from "../components/header";
import Footer from "../components/footer";
import Project from "../components/project";
import { useState, useEffect } from "react";
import { Timeline } from "../components/timeline";

const Body = styled.div`
  padding-top: 1.5rem;
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
  font-size: 42px;
  font-weight: 300;
  margin-bottom: 2rem;
  padding-bottom: 0.25rem;
  border-bottom: solid 2px;
`;

const P = styled.p`
  font-size: 18px;
  margin: 0 3rem;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    margin: 0;
    margin-bottom: 1rem;
  }
`;

const Selfie = styled.div`
  position: relative;
  margin: auto;
  margin-bottom: 2rem;
  width: 300px;
  height: 300px;
  overflow: hidden;
  border-radius: 50%;
  z-index: -1;
  border: solid 8px white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
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
            <SectionTitle>About</SectionTitle>
            <Selfie>
              <img src="./images/me.jpg" />
            </Selfie>
            <P>
              Born and raised in San Diego. Growing up, I’ve had a huge interest
              in technology. From watching The Screen Savers
              everyday after school to religiously reading the weekly Fry’s ad,
              I consider myself to be a geek.
            </P>
            <P>
              Today, I’m currently a Software Engineer who’s currently diving
              deep into React.
            </P>
          </Section>
          <Section id="experience">
            <SectionTitle>Experience</SectionTitle>
            <Timeline />
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
