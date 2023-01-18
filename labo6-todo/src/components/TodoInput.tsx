import React, { useState } from "react";

interface ToDoInputProps {
  addTodo: (todo: string) => void;
}

const TodoInput = ({ addTodo }: ToDoInputProps) => {
  const [todo, setTodo] = useState("");

  const addbuttonclicked = () => {
    setTodo("");
    addTodo(todo);
  };

  return (
    <div>
      <input
        id="todo"
        type="text"
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
      />

      <button onClick={addbuttonclicked}>Add</button>
    </div>
  );
};

export default TodoInput;
