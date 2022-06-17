import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillBook, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projets</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Compétences</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>Personnel</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/Firzus">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/lilian-prieu-554058221/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://gaming.tech/">
          <AiFillBook size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
