import styled from "styled-components";
import { useState, useEffect } from "react";

/* Global Styles */
import { GlobalStyles } from "../src/components/global";

/* Component Imports */
import Navbar from "../src/components/navbar";
import Window from "../src/components/window";

/* Section Imports */
import Header from "../src/sections/header";
import About from "../src/sections/about";
import Experience from "../src/sections/experience";
import Code from "../src/sections/code";
import Footer from "../src/sections/footer";

const Body = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 5rem;
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
      <GlobalStyles />
      <Header />
      <Window>
        <Navbar />
        <Body>
          <About />
          <Experience />
          <Code repos={repos} />
        </Body>
      </Window>
      <Footer />
    </>
  );
}
