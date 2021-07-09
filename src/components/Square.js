import React from 'react';

const Square = ({ num, onClick, isWinningSquare }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`square ${isWinningSquare ? 'winning' : ''} ${
        num === 'X' ? 'text-green' : 'text-orange'
      }`}
    >
      {num}
    </button>
  );
};

export default Square;
