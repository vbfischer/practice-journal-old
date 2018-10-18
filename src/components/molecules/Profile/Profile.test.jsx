import React from 'react';

import { shallow, mount } from 'enzyme';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { unwrap } from '@material-ui/core/test-utils';
import { Profile, theme, NavSidebarItem } from '../../../components';
import { Collapse, CardContent } from '@material-ui/core';
import { MemoryRouter } from 'react-router-dom';

const ComponentNaked = unwrap(Profile);
const ProfileLinks = () => (
  <React.Fragment>
    <NavSidebarItem path="/" itemName="Name" itemId="32323" />
  </React.Fragment>
);

describe('<Profile/>', () => {
  const username = 'John Johnson';
  const email = 'email@email.com';
  const avatarUrl = 'avatarurl';

  describe('with shallow', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
        <ComponentNaked
          classes={{}}
          username={username}
          emailAddress={email}
          avatarUrl={avatarUrl}
        />
      );
    });

    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should set username property', () => {
      expect(wrapper.instance().props.username).toEqual(username);
    });

    it('should set email property', () => {
      expect(wrapper.instance().props.emailAddress).toEqual(email);
    });

    it('should set avatarUrl property', () => {
      expect(wrapper.instance().props.avatarUrl).toEqual(avatarUrl);
    });

    it('should render username', () => {
      expect(wrapper.find(CardHeader).prop('title')).toEqual(username);
    });

    describe('Avatar property', () => {
      let avatar;

      beforeEach(() => {
        avatar = wrapper.find(CardHeader).prop('avatar');
      });

      it('should render user initials as child', () => {
        expect(avatar.props.children).toEqual('JJ');
      });

      it('should render alt text as username', () => {
        expect(avatar.props.alt).toEqual(username);
      });

      it('should render avatarurl', () => {
        expect(avatar.props.src).toEqual(avatarUrl);
      });
    });
  });

  describe('with mount', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(
        <MemoryRouter initialEntries={[{ path: '/random', key: '1' }]}>
          <MuiThemeProvider theme={theme}>
            <Profile
              username={username}
              emailAddress={email}
              avatarUrl={avatarUrl}
              profileNavLinks={<ProfileLinks />}
            />
          </MuiThemeProvider>
        </MemoryRouter>
      );
    });

    afterEach(() => {
      wrapper.unmount();
    });

    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should not be expanded as default', () => {
      expect(wrapper.find(CardContent)).not.toExist();
    });

    it('should handle sidebar opening', () => {
      wrapper.find(IconButton).simulate('click');
      expect(wrapper.find(CardContent)).toExist();
    });

    it('should render dropdown menu', () => {
      wrapper.find(IconButton).simulate('click');
      expect(wrapper.find(NavSidebarItem).length).toBe(1);
      expect(wrapper.find(NavSidebarItem)).toHaveProp('path', '/');
      expect(wrapper.find(NavSidebarItem)).toHaveProp('itemName', 'Name');
      expect(wrapper.find(NavSidebarItem)).toHaveProp('itemId', '32323');
    });
  });
});
