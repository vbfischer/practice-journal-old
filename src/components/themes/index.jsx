import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      main: '#f4f3ef'
    },
    secondary: {
      main: '#66615B'
    }
  }
});

export default theme;
