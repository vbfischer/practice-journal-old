import React from 'react';
import { createShallow, createMount } from '@material-ui/core/test-utils';

import Button from '@material-ui/core/Button';
import Header from './Header';

describe('<Header/>', () => {
  let shallow, mount;

  beforeEach(() => {
    shallow = createShallow();
    mount = createMount();
  });

  it('should render', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render title prop', () => {
    const wrapper = mount(<Header title="The Title" />);

    expect(wrapper.instance().props.title).toBe('The Title');

    expect(wrapper.find('h6').text()).toBe('The Title');
  });

  it('should render components left of the title', () => {
    const wrapper = mount(<Header left={<Button>button</Button>} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.containsMatchingElement(<Button>button</Button>)).toBe(true);
  });

  it('should render components right of the title', () => {
    const wrapper = mount(<Header right={<Button>button</Button>} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.containsMatchingElement(<Button>button</Button>)).toBe(true);
  });
});
