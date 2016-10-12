import React from 'react';
import { Footer } from '../../app/components/Footer';
import { Link } from 'react-router';
import { shallow } from 'enzyme';

describe('(Component) Footer', () => {
  let _wrapper;

  beforeEach(() => _wrapper = shallow(<Footer/>));

  it('Renders a footer that reps our company', () => {
    const item = _wrapper.find('p');
    expect(item).to.exist;
    expect(item.text()).to.match(/Copyright Info Goes Here/);
  });

  describe.skip('Navigation links...', () => {
    it('Should render an Link to about route', () => {
      expect(_wrapper.contains(<Link to='/about'/>)).to.equal.true;
    });
  });
});
