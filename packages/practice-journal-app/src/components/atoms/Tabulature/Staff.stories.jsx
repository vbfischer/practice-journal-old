import React from 'react';

import { storiesOf } from '@storybook/react';

import { Staff } from '../../../components';
import { host } from 'storybook-host';

storiesOf('1. Atoms / Staff', module)
  .addDecorator(
    host({
      title: 'Staff',
      align: 'center center',
      width: 500,
      height: 360,

      background: true
    })
  )
  .add('default', () => <Staff spaceBetweenLines={14} />);
