import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './helper';

import './styles/root.scss';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(false);
  const winner = calculateWinner(board);
  const message = winner
    ? `Winner is ${winner}`
    : `Next Player is ${isX ? 'X' : '0'}`;
  const boardClickHandler = position => {
    if (board[position] !== null || winner) return;
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
  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Board board={board} boardClickHandler={boardClickHandler} />
    </div>
  );
};

export default App;
