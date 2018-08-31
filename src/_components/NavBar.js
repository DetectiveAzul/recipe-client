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
<<<<<<< HEAD
    <NavBarWrapper>
      <LogoWrapper>
        <TitleWrapper>foodie</TitleWrapper>
        <Tomato/>
      </LogoWrapper>
      <LinkList>
        <LinkWrapper><NavLink to="/">Home</NavLink></LinkWrapper>
        <LinkWrapper><NavLink to="/recipes/">Recipes</NavLink></LinkWrapper>
        <LinkWrapper><NavLink to="/recipes/new/">New</NavLink></LinkWrapper>
      </LinkList>
    </NavBarWrapper>
=======
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/recipes/">Recipes</Link> |{" "}
      <Link to="/recipes/new/">New</Link> |{" "}
      <Link to="/guide">Conversion Guide</Link>
    </nav>
>>>>>>> development
  );
};

export default NavBar;
