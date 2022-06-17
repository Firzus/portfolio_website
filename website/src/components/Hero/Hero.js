import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Bienvenue sur <br />
          Mon Portfolio
        </SectionTitle>
        <SectionText>
          Vous pourrez trouver tous mes projets personnels, scolaires et professionnels.
          Ces projets témoignent de mon engagement personnel, de ma passion et de mon imagination.
        </SectionText>
        <Button onClick={props.handleClick}>En savoir plus</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;