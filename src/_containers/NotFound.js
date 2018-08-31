import React from 'react';
import {Link} from '@reach/router';
//Style
import {
  Box
} from './styles/EndPointsStyle.js';


 const NotFound = () => {
  return (
    <Box>
      <h1>
        404. This page does not exist!
        Go back <Link to="/">Home</Link>
      </h1>
    </Box>
  )
}

export default NotFound;
