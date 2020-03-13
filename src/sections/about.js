import { Section, SectionTitle } from "../components/section";
import { P } from "../components/text";
import { CirclePhoto } from "../components/image";

export default function About() {
  return (
    <Section id="about">
      <SectionTitle>About</SectionTitle>
      <CirclePhoto>
        <img src="./images/me.jpg" />
      </CirclePhoto>
      <P>
        Born and raised in San Diego. Growing up, I’ve had a huge interest in
        technology. From watching The Screen Savers everyday after school to
        religiously reading the weekly Fry’s ad, I consider myself to be a geek.
      </P>
      <P>
        Today, I’m currently a Software Engineer who’s currently diving deep
        into React.
      </P>
    </Section>
  );
}
