import React from 'react';

const History = ({ boardHistory, moveTo, currentIdx }) => {
  return (
    <ul>
      {boardHistory.map((_, idx) => {
        return (
          <li key={idx}>
            <button
              style={{ fontWeight: idx == currentIdx ? 'bolder' : 'normal' }}
              type="button"
              onClick={() => {
                moveTo(idx);
              }}
            >
              {idx === 0 ? 'Go to Start' : `Go to Move #${idx}`}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default History;
