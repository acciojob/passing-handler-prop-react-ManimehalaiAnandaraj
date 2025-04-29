import React from 'react';

const Selection = ({ background }) => {
  return (
    <div className="fix-box" style={{ background: background }}>
      <p>Current Color: {background}</p>
    </div>
  );
};

export default Selection;