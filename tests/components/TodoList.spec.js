import React from 'react';
import { TodoListContent } from '../../app/components/TodoList/TodoList';
import { shallow } from 'enzyme';
import { List } from 'immutable';

describe('(Component) TodoListContent', () => {
  let _props, _wrapper;

  beforeEach(() => {
    _props = {
      todoItems: List([])
    }
    _wrapper = shallow(<TodoListContent { ..._props }/>);
  });

  it('Renders a todo list', () => {
    const list = _wrapper.find('ul');
    expect(list).to.exist;
  });
});
