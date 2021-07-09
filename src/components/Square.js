import React from 'react';

const Square = ({ num, onClick }) => {
  return (
    <button type="button" className="square" onClick={onClick}>
      {num}
    </button>
  );
};

export default Square;
