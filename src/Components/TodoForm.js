import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../Redux/actions";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    addTodo(text);
    setText("");
  };

  return (
    <form className ="ToDOForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add Todo..."
      />
      <button type="submit" className="todo-btn">Add</button>
    </form>
  );
};

export default connect(null, { addTodo })(TodoForm);

