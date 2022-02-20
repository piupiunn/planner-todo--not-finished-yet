import React from "react";

import "./TodoList.css";

export default function TodoList({ dailys }) {
  return (
    <div className="daily-list">
      {dailys.map((daily) => (
        <div key={daily.id} className="daily-todo-list-card">
          <h2>{daily.title}</h2>
          <p className="daily-list-note">
            <em>{daily.note}</em>
          </p>
          <div className="daily-list-hour">{daily.hour}</div>
        </div>
      ))}
    </div>
  );
}
