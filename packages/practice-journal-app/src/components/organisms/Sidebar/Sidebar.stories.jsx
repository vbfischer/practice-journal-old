import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { host } from 'storybook-host';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Sidebar, SidebarItem } from '../../../components';

const InnerList = () => (
  <React.Fragment>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
  </React.Fragment>
);

storiesOf('3. Organisms / Sidebar', module)
  .addDecorator(withKnobs)
  .addDecorator(
    host({
      title: 'Profile Component',
      algin: 'center center',
      height: '80%',
      width: 260,
      background: true
    })
  )
  .add('default ', () => (
    <Sidebar title={text('Title', 'Title')}>
      <SidebarItem iconName="dashboard" itemName="Dashboard" />
      <SidebarItem iconName="add_circle" itemName="Alt" />
    </Sidebar>
  ));
