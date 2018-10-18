import React from 'react';

import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core';

const Sidebar = ({ classes, heading, children, title }) => {
  return (
    <Drawer
      variant="permanent"
      classes={{
        root: classes.root,
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.logo}>
        <Button href="#" className={classes.logoLink}>
          {title}
        </Button>
      </div>
      {heading}
      <Divider />
      <div className={classes.sidebarWrapper}>
        <List className={classes.list}>{children}</List>
      </div>
    </Drawer>
  );
};

const styles = theme => ({
  drawerPaper: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    position: 'relative',
    whiteSpace: 'nowrap',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9
    }
  },

  logo: {
    position: 'relative',
    height: '64px',
    display: 'flex',

    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: '0',

      height: '1px',
      right: '15px',
      width: 'calc(100% - 30px)',
      backgroundColor: 'rgba(180, 180, 180, 0.3)'
    }
  },
  logoLink: {
    color: 'inherit',
    textTransform: 'uppercase',
    display: 'block',
    fontSize: '18px',
    fontWeight: '400',
    lineHeight: '30px',
    textDecoration: 'none',
    backgroundColor: 'transparent',
    textAlign: 'center',
    flexGrow: 1,
    alignSelf: 'center'
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  list: {
    marginTop: '20px',
    listStyle: 'none',
    paddingLeft: '0',
    paddingTop: '0',
    paddingBottom: '0',
    marginBottom: '0',
    position: 'unset'
  }
});

export default withStyles(styles)(Sidebar);
