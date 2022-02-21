import React from "react";
import { useState } from "react";
import { useFetch } from "../../../hooks/useFetch";

//Style Css
import "./CreateTodo.css";

export default function CreateTodo() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [hour, setHour] = useState("");

  const {
    postData,
    data: dailys,
    error,
  } = useFetch("http://localhost:3000/dailys", "POST");

  const resetForm = () => {
    setTitle("");
    setNote("");
    setHour("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData({
      title,
      note,
      hour,
    });

    resetForm();
  };

  return (
    <div className="create-todo">
      <h2>Add Todo: </h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Todo: </span>
          <input
            className="daily-title"
            type="text"
            maxLength={22}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>

        <label>
          <span>Note: </span>
          <input
            className="daily-note"
            type="text"
            maxLength={22}
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </label>

        <label>
          <span>Hour: </span>
          <input
            className="daily-hour"
            type="time"
            value={hour}
            onChange={(e) => setHour(e.target.value)}
          />
        </label>
        <button className="add-daily-todo-button">Add</button>
      </form>
    </div>
  );
}
