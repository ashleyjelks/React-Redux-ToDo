import React, { PropTypes } from 'react';

export const TodoActions = ({ setEditingState, id, index, removeTodo }) => (
  <span>
    <a onClick={() => {
      removeTodo(index, id);
    }}
    >
      <i className="material-icons material-icons__delete" aria-label="Delete">
        delete_forever
      </i>
    </a>
    <a onClick={setEditingState}>
      <i className="material-icons material-icons__edit" aria-label="Delete">
        mode_edit
      </i>
    </a>
  </span>
);

TodoActions.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  removeTodo: PropTypes.func.isRequired,
  setEditingState: PropTypes.func.isRequired
};

export default TodoActions;
