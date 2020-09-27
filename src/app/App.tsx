import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Test from '../pages/Test';

function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path='/' component={Test} />
      </Switch>
    </Fragment>
  );
}

export default App;
