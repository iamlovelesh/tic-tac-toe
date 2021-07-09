import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './helper';

import './styles/root.scss';

const App = () => {
  const [boardHistory, setBoardHistory] = useState([
    { board: Array(9).fill(null), isX: true },
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const current = boardHistory[currentMove];
  const winner = calculateWinner(current.board);
  const message = winner
    ? `Winner is ${winner}`
    : `Next Player is ${current.isX ? 'X' : '0'}`;
  const boardClickHandler = position => {
    if (current.board[position] !== null || winner) return;
    setBoardHistory(prev => {
      const last = prev[prev.length - 1];
      const updateBoard = last.board.map((square, pos) => {
        if (pos === position) return last.isX ? 'X' : 'O';
        else return square;
      });
      return prev.concat({ board: updateBoard, isX: !last.isX });
    });
    setCurrentMove(prev => prev + 1);
  };
  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Board board={current.board} boardClickHandler={boardClickHandler} />
    </div>
  );
};

export default App;
