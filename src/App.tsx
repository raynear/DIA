import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from './Header';
import LandingPage from './LandingPage';
import NewDiamond from './NewDiamond';
import MyDiamondList from './MyDiamondList';
import RentList from './RentList';
import DiamondList from './DiamondList';
import Diamond from './Diamond';
import Investor from './Investor';
import Copyright from './Copyright';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact={true} path="/DIA/" component={LandingPage} />
          <Route exact={true} path="/DIA/MyDiamondList" component={MyDiamondList} />
          <Route exact={true} path="/DIA/NewDiamond" component={NewDiamond} />
          <Route exact={true} path="/DIA/RentList" component={RentList} />
          <Route exact={true} path="/DIA/DiamondList" component={DiamondList} />
          <Route exact={true} path="/DIA/Diamond/:ID" component={Diamond} />
          <Route exact={true} path="/DIA/Investor" component={Investor} />
        </Switch>
      </Router>
      <Copyright />
    </div>
  );
}

export default App;
