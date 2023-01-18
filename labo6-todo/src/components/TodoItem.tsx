import React, { useState } from "react";
import TodoItem from "../types";


interface ToDoListItemProps {
  todoItem: TodoItem;
  markCompleted: (completed: boolean) => void;
}

const TodoListItem = ({ todoItem, markCompleted }: ToDoListItemProps) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={todoItem.completed}
        onChange={(event) => markCompleted(event.target.checked)}
      />
      <span
        style={{ textDecoration: todoItem.completed ? "line-through" : "none" }}
      >
        {todoItem.name}
      </span>
    </div>
  );
};

export default TodoListItem;
