import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const headerStyles = {
  grow: {
    flexGrow: 1
  }
};
const Header = ({ title, left, right, classes }) => {
  return (
    <AppBar position="absolute">
      <Toolbar>
        {left}
        <Typography variant="h6" color="inherit" className={classes.grow}>
          {title}
        </Typography>
        <div>{right}</div>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  left: PropTypes.node,
  title: PropTypes.string,
  right: PropTypes.node
};

Header.defaultProps = {
  title: 'Header'
};

export default withStyles(headerStyles)(Header);
