import React from "react";

export const CustomTooltip = ({ payload, active }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="ID">{`ID : ${payload[0].payload.id}`}</p>
      </div>
    );
  }
};
