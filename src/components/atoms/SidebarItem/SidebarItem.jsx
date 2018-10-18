import React from 'react';

import { NavLink } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import { withRouter } from 'react-router';

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

export const SidebarItem = withStyles(styles)(({ classes, itemName, iconName, key }) => (
  <ListItem button key={key} className={classes.item}>
    {iconName !== undefined ? (
      <ListItemIcon className={classes.itemIcon}>
        <Icon>{iconName}</Icon>
      </ListItemIcon>
    ) : null}
    <ListItemText primary={itemName} disableTypography={true} className={classes.itemText} />
  </ListItem>
));

export const NavSidebarItem = withStyles(navStyles)(({ classes, path, ...rest }) => (
  <NavLink to={path} className={classes.root}>
    <SidebarItem {...rest} />
  </NavLink>
));

export default SidebarItem;
