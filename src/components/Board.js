import React from 'react';
import Square from './Square';

const Board = () => {
  return (
    <div className="board">
      <div className="board-row">
        <Square num={0} />
        <Square num={1} />
        <Square num={2} />
      </div>
      <div className="board-row">
        <Square num={3} />
        <Square num={4} />
        <Square num={5} />
      </div>
      <div className="board-row">
        <Square num={6} />
        <Square num={7} />
        <Square num={8} />
      </div>
    </div>
  );
};

export default Board;
