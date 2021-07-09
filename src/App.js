import React, { useState } from 'react';
import Board from './components/Board';
import History from './components/History';
import Status from './components/Status';
import { calculateWinner } from './helper';

import './styles/root.scss';

const App = () => {
  const [boardHistory, setBoardHistory] = useState([
    { board: Array(9).fill(null), isX: true },
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const current = boardHistory[currentMove];
  const winner = calculateWinner(current.board);
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
  const moveTo = idx => {
    setCurrentMove(idx);
  };
  const noMovesLeft = current.board.every(ele => {
    return ele !== null;
  });
  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <Status winner={winner} isX={current.isX} noMovesLeft={noMovesLeft} />
      <Board board={current.board} boardClickHandler={boardClickHandler} />
      <History
        boardHistory={boardHistory}
        moveTo={moveTo}
        currentIdx={currentMove}
      />
    </div>
  );
};

export default App;
