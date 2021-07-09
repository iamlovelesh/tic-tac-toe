import React from 'react';

const Square = ({ num }) => {
  return (
    <button type="button" className="square">
      {num}
    </button>
  );
};

export default Square;
