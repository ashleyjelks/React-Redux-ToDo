import React, { PropTypes } from 'react';
import TodoItem from './TodoItem';
import { List } from 'immutable';

export const TodoListContent = ({ todoItems, actions }) => (
  <ul className="todo-list">
    {todoItems.map((todoItem, index) =>
      <TodoItem
        key={index}
        todoItem={todoItem}
        index={index}
        actions={actions}
      />
    )}
  </ul>
);

TodoListContent.propTypes = {
  actions: PropTypes.object,
  todoItems: PropTypes.instanceOf(List)
};

export default TodoListContent;
