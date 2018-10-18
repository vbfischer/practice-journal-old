import React from 'react';
import { createShallow, createMount } from '@material-ui/core/test-utils';
import { render } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { SidebarItem, NavSidebarItem } from '../../../components';

describe('<SidebarItem/>', () => {
  let shallow, mount;

  beforeEach(() => {
    shallow = createShallow();
    mount = createMount();
  });

  it('should render', () => {
    const wrapper = shallow(<SidebarItem itemName="Item" itemId="1" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should correctly render the name', () => {
    const wrapper = render(<SidebarItem itemName="Item" itemId="1" />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div > div').text()).toBe('Item');
  });

  it('should correctly render the icon', () => {
    const wrapper = mount(<SidebarItem itemName="item" iconName="icon" itemId="1" />);
    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find('Icon').text()).toBe('icon');
  });

  it('should not render an icon if not specified', () => {
    const wrapper = mount(<SidebarItem itemName="Item" itemId="1" />);
    expect(wrapper.find('Icon').exists()).toBeFalsy();
  });

  describe('<NavSidebarItem/>', () => {
    it('should render nav', () => {
      const wrapper = shallow(
        <MemoryRouter initialEntries={[{ path: '/random', key: '1' }]}>
          <NavSidebarItem path="/path" itemName="item" itemId="21" />
        </MemoryRouter>
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('should correctly render link', () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={[{ path: '/random', key: '1' }]}>
          <NavSidebarItem path="/path" itemName="item" itemId="21" />
        </MemoryRouter>
      );
      expect(wrapper.find('a').exists()).toBeTruthy();
    });
  });
});
