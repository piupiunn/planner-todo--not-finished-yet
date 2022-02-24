import React from "react";
import { useFetch } from "../../../hooks/useFetch";

import "./TodoList.css";

export default function TodoList({ checkedBox, dailys }) {
  const changeColorRed = (e) => {
    e.target.parentElement.style.setProperty("background-color", "red");
  };

  const changeColorBlue = (e) => {
    e.target.parentElement.style.setProperty("background-color", "blue");
  };

  const changeColorGreen = (e) => {
    e.target.parentElement.style.setProperty("background-color", "green");
  };

  return (
    <div className="daily-list">
      {dailys.map((daily, index) => (
        <div key={daily.id} className="daily-list-card">
          <div className="daily-list-button">
            <button onClick={changeColorRed} className="red-button"></button>
            <button onClick={changeColorBlue} className="blue-button"></button>
            <button
              onClick={changeColorGreen}
              className="green-button"
            ></button>
          </div>
          <button className="todo-list-close-button"></button>

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
        </div>
      ))}
    </div>
  );
}
