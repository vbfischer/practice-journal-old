import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { host } from 'storybook-host';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Profile, SidebarItem } from '../../../components';

storiesOf('2. Molecules / Profile', module)
  .addDecorator(
    host({
      title: 'Profile Component',
      algin: 'center center',
      width: 260,
      background: true
    })
  )
  .addDecorator(withKnobs)
  .add('default', () => (
    <Profile
      username={text('Username', 'John Livingston')}
      emailAddress={text('Email Address', 'address@add.com')}
      avatarUrl={text('Avatar URL', 'https://uinames.com/api/photos/male/15.jpg')}
      profileNavLinks={<SidebarItem itemName="Profile" iconName="account_box" itemId="23432" />}
    />
  ));
