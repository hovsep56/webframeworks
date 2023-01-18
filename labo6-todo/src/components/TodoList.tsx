import React, { useState } from "react";
import TodoListItem from "./TodoItem";

interface TodoItem {
  name: string;
  completed: boolean;
}

interface ToDoListProps {
  todos: TodoItem[];
  markCompleted: (index: number, completed: boolean) => void;
}

const TodoList = ({ todos, markCompleted }: ToDoListProps) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoListItem
          todoItem={todo}
          markCompleted={(completed: boolean) =>
            markCompleted(index, completed)
          }
        />
      ))}
    </div>
  );
};

export default TodoList;
