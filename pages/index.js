import styled from "styled-components";

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
  padding-bottom: 2.5rem;
`;

export default function Index() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Window>
        <Navbar />
        <Body>
          <About />
          <Experience />
          <Code />
        </Body>
      </Window>
      <Footer />
    </>
  );
}
