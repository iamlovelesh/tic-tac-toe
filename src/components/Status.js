import React from 'react';

const Status = ({ winner, isX, noMovesLeft }) => {
  return (
    <h2>
      {winner && `Winner is ${winner}`}{' '}
      {!winner && !noMovesLeft && `Next Player is ${isX ? 'X' : 'O'}`}
      {!winner && noMovesLeft && 'X and O tied'}
    </h2>
  );
};

export default Status;
