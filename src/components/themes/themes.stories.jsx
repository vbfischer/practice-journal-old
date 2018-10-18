import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import ReactJson from 'react-json-view';

import { theme } from '../../components';
import { withTheme } from '@material-ui/core/styles';

const ThemeComponent = ({ theme }) => <ReactJson src={theme} collapsed={false} theme="solarized" />;
const ThemeViewer = withTheme()(ThemeComponent);

storiesOf('4. Theme / theme', module).add('default theme', () => <ThemeViewer />);
