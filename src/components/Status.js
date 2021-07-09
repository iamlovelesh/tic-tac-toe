import React from 'react';

const Status = ({ winner, isX, noMovesLeft }) => {
  return (
    <div className="status-message">
      {winner && (
        <>
          {' '}
          Winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      )}
      {!winner && !noMovesLeft && (
        <>
          Next player is{' '}
          <span className={isX ? 'text-green' : 'text-orange'}>
            {isX ? 'X' : 'O'}{' '}
          </span>
        </>
      )}
      {!winner && noMovesLeft && (
        <>
          <span className="text-green">X</span> and{' '}
          <span className="text-orange">O</span> tied
        </>
      )}
    </div>
  );
};

export default Status;
