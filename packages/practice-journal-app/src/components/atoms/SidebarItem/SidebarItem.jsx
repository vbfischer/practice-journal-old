import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
  item: {},
  itemIcon: {
    color: 'inherit'
  },
  itemText: {}
});

const navStyles = theme => ({
  root: {
    position: 'relative',
    display: 'block',
    textDecoration: 'none',
    color: 'inherit',

    '&.active': {
      color: '#ff9800'
    }
  }
});

export const SidebarItem = withStyles(styles)(({ classes, itemName, iconName, listId }) => (
  <ListItem button key={listId} className={classes.item}>
    {iconName !== undefined ? (
      <ListItemIcon className={classes.itemIcon}>
        <Icon>{iconName}</Icon>
      </ListItemIcon>
    ) : null}
    <ListItemText primary={itemName} disableTypography={true} className={classes.itemText} />
  </ListItem>
));

SidebarItem.propTypes = {
  itemName: PropTypes.string,
  iconName: PropTypes.string,
  itemId: PropTypes.string.isRequired
};

SidebarItem.displayName = 'SidebarItem';

export const NavSidebarItem = withStyles(navStyles)(({ classes, path, ...rest }) => (
  <NavLink to={path} className={classes.root}>
    <SidebarItem {...rest} />
  </NavLink>
));

NavSidebarItem.propTypes = {
  itemName: PropTypes.string,
  iconName: PropTypes.string,
  itemId: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};

NavSidebarItem.displayName = 'NavSidebarItem';
export default SidebarItem;
