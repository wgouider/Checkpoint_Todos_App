import React, { useState } from "react";
import { connect } from "react-redux";
import {
  toggleTodo,
  deleteTodo,
  updateTodo,
  VisibilityFilters,
} from "../Redux/actions";

const TodoList = ({ todos, toggleTodo, deleteTodo, updateTodo }) => {
  const [updatedText, setUpdatedText] = useState("");
  const [editId, setEditId] = useState(null);

  const handleEdit = (id, text) => {
    setEditId(id);
    setUpdatedText(text);
  };

  const handleUpdate = (id) => {
    if (updatedText.trim() === "") return;
    updateTodo(id, updatedText);
    setEditId(null);
    setUpdatedText("");
  };

  return (
    <div className="Todo">
      {todos.map((todo) => (
        <p key={todo.id}>
          {editId === todo.id ? (
            <div>
              <input
                type="text"
                value={updatedText}
                onChange={(e) => setUpdatedText(e.target.value)}
                placeholder="New text..."
              />
              <button onClick={() => handleUpdate(todo.id)}>Save</button>
            </div>
          ) : (
            <div >
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.text}
              </span>

              <button
                className="todo-btn"
                onClick={() => handleEdit(todo.id, todo.text)}
              >
                Edit
              </button>
              <button className="todo-btn" onClick={() => deleteTodo(todo.id)}>
                Delete
              </button>
            </div>
          )}
        </p>
      ))}
    </div>
  );
};

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((todo) => todo.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((todo) => !todo.completed);
    case VisibilityFilters.SHOW_ALL:
    default:
      return todos;
  }
};

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

export default connect(mapStateToProps, { toggleTodo, deleteTodo, updateTodo })(
  TodoList
);

{
  /* <div className="Todo">
      <p
        onClick={() => toggleComplete(task.id)}
        className={`$ {task.completed ? 'completed' : ""}`}
      >
        {" "}
        {task.task}{" "}
      </p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
      </div>
    </div> */
}
