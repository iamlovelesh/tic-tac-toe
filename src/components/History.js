import React from 'react';

const History = ({ boardHistory, moveTo, currentIdx }) => {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {boardHistory.map((_, idx) => {
          return (
            <li key={idx}>
              <button
                className={`btn-move ${idx === currentIdx ? 'active' : ''}`}
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
    </div>
  );
};

export default History;
