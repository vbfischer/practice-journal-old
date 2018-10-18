import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { host } from 'storybook-host';
import { action } from '@storybook/addon-actions';

import { MenuButton } from '../../../components';
import { SidebarStateContext } from '../../../context';

storiesOf('2. Molecules / MenuButton', module)
  .addDecorator(withKnobs)
  .addDecorator(
    host({
      title: 'Menu Button',
      algin: 'center center',
      height: '80%',
      width: 260,
      background: true
    })
  )
  .add('Menu Opened', () => (
    <SidebarStateContext.Provider
      value={{
        opened: boolean('Opened', true),
        toggleSidebarState: action('toggle sidebar state')
      }}
    >
      <MenuButton />
    </SidebarStateContext.Provider>
  ))
  .add('Menu Closed', () => (
    <SidebarStateContext.Provider
      value={{
        opened: boolean('Opened', false),
        toggleSidebarState: action('toggle sidebar state')
      }}
    >
      <MenuButton />
    </SidebarStateContext.Provider>
  ));
