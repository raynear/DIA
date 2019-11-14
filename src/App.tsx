import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from './Header';
import LandingPage from './LandingPage';
import Dashboard from './Dashboard';
import NewPost from './NewPost';
import Copyright from './Copyright';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact={true} path="/" component={LandingPage} />
          <Route exact={true} path="/Dashboard" component={Dashboard} />
          <Route exact={true} path="/NewPost" component={NewPost} />
        </Switch>
      </Router>
      <Copyright />
    </div>
  );
}

export default App;
