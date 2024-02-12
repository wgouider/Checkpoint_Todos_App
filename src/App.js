import React from "react";
import { Provider } from "react-redux";
import store from "./Redux/store";
import TodoList from "./Components/TodoList";
import TodoForm from "./Components/TodoForm";
import VisibilityFilter from "./Components/VisibilityFilter";
import "./App.css"; // Importer le fichier CSS

const App = () => (
  <Provider store={store}>
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm />
      <VisibilityFilter />
      <TodoList />
    </div>
  </Provider>
);

export default App;
