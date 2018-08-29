import React from 'react';
import {Link} from '@reach/router';

 const NotFound = () => {
  return (
    <div>
      <h1>
        404. This page does not exist!
        Go back <Link to="/">Home</Link> 
      </h1>
    </div>
  )
}

export default NotFound;
