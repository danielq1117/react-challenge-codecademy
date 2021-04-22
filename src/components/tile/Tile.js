import React from 'react';

export const Tile = ({ data }) => {
  return (
    <div className="tile-container">
      {Object.values(data).map((info, index) => (
        <p key={index} className={`${index ? 'tile' : 'tile-title'} tile`}>
          {info}
        </p>
      ))}
    </div>
  );
};
