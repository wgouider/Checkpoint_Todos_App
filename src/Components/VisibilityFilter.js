import React from "react";
import { connect } from "react-redux";
import { setVisibilityFilter, VisibilityFilters } from "../Redux/actions";

const VisibilityFilter = ({ setVisibilityFilter }) => (
  <div className="visibility-filter">
    <button
      className="todo-btn"
      onClick={() => setVisibilityFilter(VisibilityFilters.SHOW_ALL)}
    >
      All
    </button>
    <button
      className="todo-btn"
      onClick={() => setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED)}
    >
      Completed
    </button>
    <button
      className="todo-btn"
      onClick={() => setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE)}
    >
      Active
    </button>
  </div>
);

export default connect(null, { setVisibilityFilter })(VisibilityFilter);
