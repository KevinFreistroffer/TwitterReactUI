import React from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Feed from './routes/feed';

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <div className='App'>
        <header></header>
        <Switch>
          <Route path='/feed'>
            <Feed />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
