import React from "react";

import "./TodoList.css";

export default function TodoList({ dailys, checkedBox }) {
  return (
    <div className="daily-list">
      {dailys.map((daily) => (
        <div key={daily.id} className="daily-list-card">
          <button className="daily-list-button">+</button>
          <button className="todo-list-close-button"> </button>

          <h2 className="daily-list-title">
            <input
              className="todo-check-box"
              type="checkbox"
              disabled={false}
              onChange={checkedBox}
            />

            {daily.title}
          </h2>

          <p className="daily-list-note">
            <em>{daily.note}</em>
          </p>
          <div className="daily-list-hour">{daily.hour}</div>
          <div className="todo-card-color-pick">
            <button className="red-button"></button>
            <button className="blue-button"></button>
            <button className="green-button"></button>
          </div>
        </div>
      ))}
    </div>
  );
}
