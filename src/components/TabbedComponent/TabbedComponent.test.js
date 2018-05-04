import React from 'react';
import ReactDOM from 'react-dom';
import TabbedComponent from './TabbedComponent';
import { shallow } from 'enzyme';

it('Changes options on click', () => {
  const wrapper = shallow(<TabbedComponent />);

  expect(wrapper.state().selected).toBe(0);
  expect(wrapper.find('.Option')).toHaveLength(3);
  expect(wrapper.find('.Option.Selected')).toHaveLength(1);
  
  wrapper.find('.Option').at(1).simulate('click');
  expect(wrapper.state().selected).toBe(1);
  expect(wrapper.find('.Option.Selected')).toHaveLength(1);
});