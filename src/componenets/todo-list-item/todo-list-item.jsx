import React from "react";
import "./todo-list-item.css";

const TodoListItem = ({
  label,
  onDeleted,
  onToggleImportant,
  onToggleDone,
  important,
  done,
}) => {
  let classNames = "todo-list-item";

  if (done) {
    classNames += " done";
  }

  if (important) {
    classNames += " important";
  }

  return (
    <div className={classNames}>
      <span
        className="todo-list-item-label"
        onClick={/*this.onLabelClick*/ onToggleDone}
      >
        {label}
      </span>
      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
        onClick={onDeleted}
      >
        <i className="fa fa-trash-o"></i>
      </button>
      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right"
        onClick={/*this.onMarkImportant*/ onToggleImportant}
      >
        <i className="fa fa-exclamation"></i>
      </button>
    </div>
  );
};
export default TodoListItem;
