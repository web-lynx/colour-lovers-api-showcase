import React from 'react';

const ColourShowcase = (props) => {
  return( 
  <div>
      <h2>This is {props.length !== 0 ? `the ${props.name} pattern.` : "a placeholder - sorry, the API call failed!"}</h2>
      <p>It was designed by {props.length !== 0 ? `the ${props.name} pattern.` : "a placeholder - sorry, the API call failed!"}</p>
  </div>
  );
};

export default ColourShowcase;
