import React from 'react';
import {Link} from '@reach/router';


const NavBar = () => {
  return(
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/recipes/">Recipes</Link> |{" "}
      <Link to="/recipes/new/">New</Link>
    </nav>
  );
};

export default NavBar;