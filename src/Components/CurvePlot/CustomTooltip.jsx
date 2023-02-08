import React from 'react';

export const CustomTooltip = ({ payload, active }) => {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="xPosition">{`X Position : ${payload[0].value}`}</p>
          <p className="yPosition">{`Y Position : ${payload[1].value}`}</p>
        </div>
      );
    }
}