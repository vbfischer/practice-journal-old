import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { host } from 'storybook-host';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import StoryRouter from 'storybook-react-router';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core';

import { SidebarItem, NavSidebarItem, theme } from '../../../components';

const StyledList = withStyles({
  root: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main
  }
})(List);
storiesOf('1. Atoms / SidebarItem', module)
  .addDecorator(withKnobs)
  .addDecorator(StoryRouter({}, { initialEntries: ['/active'] }))
  .addDecorator(story => <StyledList>{story()}</StyledList>)
  .addDecorator(
    host({
      title: 'Sidebar Item',
      algin: 'center center',
      width: 260
    })
  )
  .add('default item', () => (
    <SidebarItem iconName={text('iconName', 'dashboard')} itemName={text('Caption', 'Dashboard')} />
  ))
  .add('With Nav Link', () => (
    <NavSidebarItem
      path="/path"
      iconName={text('iconName', 'dashboard')}
      itemName={text('Caption', 'Dashboard')}
    />
  ))
  .add('With Nav Link Active', () => (
    <NavSidebarItem
      path="/active"
      iconName={text('iconName', 'dashboard')}
      itemName={text('Caption', 'Dashboard')}
    />
  ));
