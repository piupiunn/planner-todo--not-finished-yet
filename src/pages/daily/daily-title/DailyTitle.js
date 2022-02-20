import React from "react";
import "./DailyTitle.css";

export default function DailyTitle({ setShowDailyModal, setShowDailyList }) {
  return (
    <div className="daily-todo-title">
      <button onClick={() => setShowDailyModal(true)}>Add</button>
    </div>
  );
}
