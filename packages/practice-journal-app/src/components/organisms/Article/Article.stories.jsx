import React from 'react';

import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import { withKnobs } from '@storybook/addon-knobs';

import { Article } from '../../../components';

storiesOf('3. Organisms / Article', module)
  .addDecorator(withKnobs)
  .addDecorator(
    host({
      title: 'Article Component',
      algin: 'center center',
      background: true,
      width: '100%'
    })
  )
  .add('default', () => <Article />);
