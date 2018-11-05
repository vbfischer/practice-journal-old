import React from 'react';

import { createShallow, createMount } from '@material-ui/core/test-utils';
import MenuButton from './MenuButton';

describe('<MenuButton/>', () => {
  let shallow, mount;

  beforeEach(() => {
    shallow = createShallow();
    mount = createMount();
  });

  it('should render when not opened', () => {
    const outer = shallow(<MenuButton />);
    const Child = outer.props().children;
    const wrapper = mount(<Child opened={false} />);

    const found = wrapper.find('Icon');
    expect(found.text()).toBe('keyboard_arrow_right');
    expect(wrapper).toMatchSnapshot();
  });

  it('should render when opened', () => {
    const outer = shallow(<MenuButton />);
    const Child = outer.props().children;
    const wrapper = mount(<Child opened={true} />);

    expect(wrapper.find('Icon').text()).toBe('keyboard_arrow_left');
    expect(wrapper).toMatchSnapshot();
  });

  it('should emit callback when clicked', () => {
    const toggleFn = jest.fn();

    const outer = shallow(<MenuButton />);
    const Child = outer.props().children;
    const wrapper = mount(<Child opened={false} toggleSidebarState={toggleFn} />);
    wrapper.find('button').simulate('click');
    expect(toggleFn.mock.calls.length).toBe(1);
  });


});
