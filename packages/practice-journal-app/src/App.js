import React, { Component } from 'react';

import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

import withRoot from 'withRoot';
import indexRoutes from 'routes';

const hist = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={hist}>
        <Switch>
          {indexRoutes.map(prop => {
            return <Route path={prop.path} component={prop.component} key={prop.id} />;
          })}
        </Switch>
      </Router>
    );
  }
}

export default withRoot(App);
