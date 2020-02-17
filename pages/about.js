import styled from "styled-components";
import Link from "next/link";
import Navbar from "../components/navbar";
import Page from "../components/window";

export default function About() {
  return (
    <Page>
      <Navbar />
      <p>This is the about page</p>
      <Link href="/" title="Index Page">
        <a>Goto index</a>
      </Link>
    </Page>
  );
}
