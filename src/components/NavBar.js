import React from 'react';
import {Link} from '@reach/router';
import styled from 'styled-components';

// const Button = styled.button`
//   /* Adapt the colours based on primary prop */
//   background: ${props => props.primary ? 'palevioletred' : 'white'};
//   color: ${props => props.primary ? 'white' : 'palevioletred'};
//
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;
// `;

const NavBar = () => {
  return(
    <nav>
      {/*<Button>*/}<Link to="/">Home</Link>{/*</Button>*/} |{" "}
      <Link to="/recipes">Recipes</Link> |{" "}
      <Link to="/ingredients">Ingredients</Link>
    </nav>
  );
};

export default NavBar;
