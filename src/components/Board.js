import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(false);
  const boardClickHandler = position => {
    if (board[position] !== null) return;
    setBoard(prev => {
      return prev.map((square, pos) => {
        if (pos === position) return isX ? 'X' : 'O';
        else return square;
      });
    });
    setIsX(prev => {
      return !prev;
    });
  };
  const renderSquare = position => {
    return (
      <Square
        num={board[position]}
        onClick={() => {
          boardClickHandler(position);
        }}
      />
    );
  };
  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
