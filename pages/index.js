import styled from "styled-components";
import Navbar from "../components/navbar";
import Window from "../components/window";
import Header from "../components/header";
import Footer from "../components/footer";
import Project from "../components/project";

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

export default function Index() {
  return (
    <>
      <Header />
      <Window>
        <Navbar />
        <Body>
          <Section id="about">
            <h1>Section 1</h1>
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
            <h1>Section 2</h1>
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
            <h1>Section 3</h1>
            <Project
              title="Personal Website v1"
              description="My very first take at making a website."
              projectLink="https://omgitsfrancis.github.io/"
              gitLink="https://github.com/omgitsfrancis/omgitsfrancis.github.io"
            />
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
            <p>Home</p>
          </Section>
        </Body>
      </Window>
      <Footer />
    </>
  );
}
