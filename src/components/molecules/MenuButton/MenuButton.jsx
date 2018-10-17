import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import { SidebarStateConsumer } from '../../../context';

class MenuButton extends React.Component {
  render() {
    return (
      <SidebarStateConsumer>
        {({ opened, toggleSidebarState }) => (
          <IconButton onClick={toggleSidebarState} color="inherit" aria-label="Toggle Drawer">
            <Icon>{opened ? 'keyboard_arrow_left' : 'keyboard_arrow_right'}</Icon>
          </IconButton>
        )}
      </SidebarStateConsumer>
    );
  }
}

export default MenuButton;
