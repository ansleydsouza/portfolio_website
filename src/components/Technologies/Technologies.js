import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="#tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I strongly believe in Web 3.0 as the future and I am highly interested in
      using different technologies to build amazing Decentralized Applications.
    </SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <DiReact size="3rem" />
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>React JS</ListParagraph>
          <ListParagraph>Next JS</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <DiFirebase size="3rem" />
          <ListTitle>Smart Contracts</ListTitle>
          <ListParagraph>Solidity</ListParagraph>
          <ListParagraph>Motoko</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <DiZend size="3rem" />
          <ListTitle>Others</ListTitle>
          <ListParagraph>Consulting</ListParagraph>
          <ListParagraph>Solutioning</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
