import React, { useState } from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Feed from './routes/feed';
import Post from './routes/post';
import Header from './components/Header';

export const history = createBrowserHistory();

function App() {
  const [title] = useState('IllPost');

  return (
    <Router history={history}>
      <div className='App'>
        <Header title={title}></Header>
        <Switch>
          <Route path='/feed' component={Feed}></Route>
          <Route path='/post' component={Post}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
