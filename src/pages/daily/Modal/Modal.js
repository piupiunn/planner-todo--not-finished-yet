import React from "react";
import "./Modal.css";

export default function Modal({ children, closeDailyModal }) {
  return (
    <div className="daily-modal-backdrop">
      <div className="daily-modal">
        {children}
        <button className="daily-modal-button" onClick={closeDailyModal}>
          x
        </button>
      </div>
    </div>
  );
}
