import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import Button from '@material-ui/core/Button';
import { Header } from '../../../components';

storiesOf('3. Organisms / Header', module)
  .addDecorator(withKnobs)
  .add('Standard Header', () => (
    <Header
      title={text('Title', 'Header')}
      left={<Button>LB</Button>}
      right={<Button>RB</Button>}
      onMenuToggle={action('Menu Button Clicked')}
    />
  ));
