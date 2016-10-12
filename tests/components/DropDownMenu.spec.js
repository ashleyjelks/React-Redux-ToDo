import React from 'react';
import { NavMenu } from '../../app/components/NavMenu';
import { shallow } from 'enzyme';

describe('(Component) NavMenu', () => {
  let _wrapper;

  beforeEach(() => _wrapper = shallow(<NavMenu/>));

  it('Renders an FAQ', () => {
    const menu = _wrapper.find('Menu');
    expect(menu).to.exist;
  });
});
