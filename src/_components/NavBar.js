import React from 'react';
import {Link} from '@reach/router';
//Style
import {
  NavBarWrapper, TitleWrapper, Tomato,
  LinkList, LogoWrapper, LinkWrapper
} from './styles/NavBarStyle.js';

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        style: {
          color: isCurrent ? "red" : "green",
          textDecoration: "none"
        }
      };
    }}
  />
);

const NavBar = () => {
  return(
    <NavBarWrapper>
      <LogoWrapper>
        <TitleWrapper>foodie</TitleWrapper>
        <a href="/"><Tomato/></a>
      </LogoWrapper>
      <LinkList>
        <LinkWrapper><NavLink to="/">Home</NavLink></LinkWrapper>
        <LinkWrapper><NavLink to="/recipes/">Recipes</NavLink></LinkWrapper>
        <LinkWrapper><NavLink to="/recipes/new/">New</NavLink></LinkWrapper>
        <LinkWrapper><NavLink to="/guide/">Conversion Guide</NavLink></LinkWrapper>
      </LinkList>
    </NavBarWrapper>
  );
};

export default NavBar;
