import React from 'react';

import { shallow, mount } from 'enzyme';

import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import { Sidebar } from '../../../components';

describe('<Sidebar/>', () => {
  describe('render title', () => {
    const title = 'The Title';
    const component = shallow(<Sidebar title={title} />);

    it('should match snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    it('should set property title', () => {
      expect(component.instance().props.title).toBe(title);
      expect(
        component
          .dive()
          .find(Button)
          .children()
          .text()
      ).toBe(title);
    });
  });

  describe('render header', () => {
    const heading = <div>Heading...</div>;

    const component = shallow(<Sidebar heading={heading} />);

    it('should match snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    it('should set property heading', () => {
      expect(component.instance().props.heading).toBe(heading);
    });

    it('should insert heading into dom', () => {
      expect(component.dive().containsMatchingElement(heading)).toBeTruthy();
    });
  });

  describe('render children', () => {
    const Children = () => (
      <React.Fragment>
        <ListItem>
          <ListItemText primary="something" />
        </ListItem>
      </React.Fragment>
    );
    const component = shallow(
      <Sidebar>
        <Children />
      </Sidebar>
    );

    it('should match snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    it('should insert children', () => {
      expect(component.dive().find(Children).length).toBe(1);
    });
  });
});
