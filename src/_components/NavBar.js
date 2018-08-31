import React from 'react';
import {Link} from '@reach/router';
//Style
import {
  NavBarWrapper, TitleWrapper, Tomato,
  LinkList, LogoWrapper, LinkWrapper
} from './styles/NavBarStyle.js';


const NavBar = () => {
  return(
    <NavBarWrapper>
      <LogoWrapper>
        <TitleWrapper>foodie</TitleWrapper>
        <Tomato/>
      </LogoWrapper>
      <LinkList>
        <LinkWrapper><Link to="/">Home</Link></LinkWrapper>
        <LinkWrapper><Link to="/recipes/">Recipes</Link></LinkWrapper>
        <LinkWrapper><Link to="/recipes/new/">New</Link></LinkWrapper>
      </LinkList>
    </NavBarWrapper>
  );
};

export default NavBar;
