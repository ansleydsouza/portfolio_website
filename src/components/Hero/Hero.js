import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nonpadding>
    <LeftSection>
      <SectionTitle main center>
        Ansley D'souza
      </SectionTitle>
      <SectionText>Blockchain Engineer</SectionText>
      <SectionText>Web 3.0 FTW!</SectionText>
      <Button>
        <a href="mailto:ansleydsouza@outlook.com">Contact Me</a>
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
