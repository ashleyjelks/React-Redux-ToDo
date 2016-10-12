import React from 'react';
import { AddTodoItem } from '../../app/components/TodoList/AddTodo';
import { shallow } from 'enzyme';

describe('(Component) AddTodoItem', () => {
  let _props, _wrapper;

  beforeEach(() => {
    _props = {
        dispatch: function() {}
    };
    _wrapper = shallow(<AddTodoItem { ..._props } />);
  });

  it('Renders a todo adding textfield', () => {
    const list = _wrapper.find('TextField');
    expect(list).to.exist;
  });
});
