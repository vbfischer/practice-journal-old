import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { withOptions } from '@storybook/addon-options';

import { createMuiTheme, CssBaseline, MuiThemeProvider } from '@material-ui/core';

import { theme } from '../src/components';

const req = require.context('../src', true, /.stories.jsx$/);

withOptions({
  hierarchySeparator: /\/|\./,
  hierarchyRootSeparator: /\|/
});

addDecorator((storyFn, context) => withConsole()(storyFn)(context));

addDecorator(story => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {story()}
  </MuiThemeProvider>
));

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
