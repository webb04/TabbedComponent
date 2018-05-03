import React from 'react';
import ReactDOM from 'react-dom';
import TabbedComponent from './TabbedComponent';
import { shallow } from 'enzyme';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TabbedComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Changes options on click', () => {
  const wrapper = shallow(<TabbedComponent />);

  expect(wrapper.state().selected).toBe(0);
  expect(wrapper.find('.Option')).toHaveLength(3);
  expect(wrapper.find('.Option.Selected')).toHaveLength(2);

//   expect(wrapper.find('.reserve').text()).toBe('Place Reservation');
//   wrapper.find('.option').simulate('click');

  
});