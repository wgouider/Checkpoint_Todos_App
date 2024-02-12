import { combineReducers } from "redux";
import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  SET_VISIBILITY_FILTER,
  UPDATE_TODO,
  VisibilityFilters,
} from "./actions";

const { SHOW_ALL } = VisibilityFilters;

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);
      default:
      return state;

      case UPDATE_TODO: // Ajouter un nouveau cas pour gérer l'action UPDATE_TODO
      return state.map(todo =>
        todo.id === action.id ? { ...todo, text: action.newText } : todo
      );
    }
};

const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default combineReducers({
  todos,
  visibilityFilter,
});
