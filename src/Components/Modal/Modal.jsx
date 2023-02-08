import React from "react";
import "../../index.css";

export const Modal = ({ showModal, selectedPoint, onClose }) => {
  if (!showModal) {
    return null;
  }
  return (
    <div className="modal" id="modal">
      <h2>Selected Point</h2>
      <div className="content">
        <div className="col1">
          <p className="label">ID: {selectedPoint.id}</p>
          <p className="label">Name: {selectedPoint.name}</p>
          <p className="label">Value: {selectedPoint.value}</p>
        </div>
        <div className="col2">
          <p className="label">Row: {selectedPoint.row}</p>
          <p className="label">Column: {selectedPoint.col}</p>
          <p className="label">Color: {selectedPoint.color}</p>
        </div>
      </div>
      <div className="actions">
        <button className="toggle-button" onClick={onClose}>
          close
        </button>
      </div>
    </div>
  );
};
