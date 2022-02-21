import React from "react";

import { useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import CreateTodo from "../create-todo/CreateTodo";
import DailyTitle from "../daily-title/DailyTitle";
import Modal from "../Modal/Modal";
import TodoList from "../todo-list/TodoList";

export default function DailyHome() {
  const [showDailyModal, setShowDailyModal] = useState(true);

  const {
    data: dailys,
    isPending,
    error,
  } = useFetch("http://localhost:3000/dailys");

  const closeDailyModal = () => {
    setShowDailyModal(false);
  };

  const checkedBox = (e) => {
    e.target.disabled = true;
    e.target.parentElement.style.setProperty("text-decoration", "line-through");
  };

  return (
    <>
      <DailyTitle setShowDailyModal={setShowDailyModal} />
      <div className="daily-home">
        {isPending && <div className="loading">Loading..</div>}
        {error && <div className="error">{error}</div>}
        {dailys && <TodoList dailys={dailys} checkedBox={checkedBox} />}
      </div>
      {showDailyModal && (
        <Modal closeDailyModal={closeDailyModal}>
          <CreateTodo />
        </Modal>
      )}
    </>
  );
}
