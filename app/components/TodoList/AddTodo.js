import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export const AddTodoItem = ({ onSubmit }) => {
  const addTodoItem = () => {
    let inputField = document.getElementById('addTodoText');

    if (inputField.value !== '') {
      onSubmit(inputField.value);
      inputField.value = '';
    }
  };

  const submitOnEnter = (e) => {
    if (e.key === 'Enter') {
      addTodoItem();
    }
  };

  return (
    <div>
      <TextField
        hintText="Enter todo item"
        id="addTodoText"
        aria-label="Enter todo item"
        onKeyPress={submitOnEnter}
      />
      <RaisedButton
        className="addTodo__button"
        aria-label="Add Item"
        label="Add"
        className="add-todo__button"
        primary
        onClick={addTodoItem}
      />
    </div>
  );
};

AddTodoItem.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default AddTodoItem;
