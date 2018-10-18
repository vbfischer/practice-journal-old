import React from 'react';
import PropTypes from 'prop-types';

import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';

import Typography from '@material-ui/core/Typography';

import { withStyles, Collapse } from '@material-ui/core';

class Profile extends React.Component {
  state = {
    expanded: false
  };

  handleClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  getInitials = name => {
    const parts = name.split(' ');

    return parts.map(x => x[0]).join('');
  };

  render() {
    const { classes, avatarUrl, username, emailAddress, profileNavLinks } = this.props;

    const initials = this.getInitials(username);
    const ActionIcon = this.state.expanded ? ExpandLess : ExpandMore;
    return (
      <React.Fragment>
        <Card className={classes.root}>
          <CardHeader
            classes={{
              title: classes.header,
              subheader: classes.subheader
            }}
            avatar={
              <Avatar alt={username} src={avatarUrl} aria-label="Profile">
                {initials}
              </Avatar>
            }
            title={username}
            subheader={emailAddress}
            titleTypographyProps={{ variant: 'subtitle2' }}
            subheaderTypographyProps={{ variant: 'caption' }}
            action={
              <IconButton className={classes.action} onClick={this.handleClick}>
                <ActionIcon />
              </IconButton>
            }
          />
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <List>{profileNavLinks}</List>
            </CardContent>
          </Collapse>
        </Card>
      </React.Fragment>
    );
  }
}

Profile.propTypes = {
  avatarUrl: PropTypes.string,
  username: PropTypes.string.isRequired,
  emailAddress: PropTypes.string.isRequired,
  profileNavLinks: PropTypes.node
};

const profileStyles = theme => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main
  },
  header: {
    color: 'inherit'
  },
  subheader: {
    color: 'inherit'
  },
  action: {
    color: 'inherit'
  },
  userName: {
    color: 'inherit'
  }
});

export default withStyles(profileStyles)(Profile);
