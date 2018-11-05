import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core';

import { SidebarStateContext } from '../../../context';

class MainTemplate extends React.Component {
  state = {
    opened: true
  };

  toggleOpened = () => {
    this.setState({
      ...this.state,
      opened: !this.state.opened
    });
  };

  render() {
    const { header, children, classes } = this.props;
    return (
      <SidebarStateContext.Provider value={{ ...this.state, toggleOpened: this.toggleOpened }}>
        <div className={classes.wrapper}>
          <header className={classes.header}>{header}</header>
          <main className={classes.content}>{children}</main>
        </div>
      </SidebarStateContext.Provider>
    );
  }
}

MainTemplate.propTypes = {
  header: PropTypes.node.isRequired,
  children: PropTypes.any.isRequired
  //   sidebar: PropTypes.node.isRequired
};

const styles = theme => ({
  wrapper: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    position: 'relative',
    display: 'flex'
  },
  content: {
    position: 'relative',
    display: 'flex',
    marginTop: 56
  }
});

export default withStyles(styles)(MainTemplate);
