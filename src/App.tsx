import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from './Header';
import LandingPage from './LandingPage';
import Cert from './Cert';
import NewCert from './NewCert';
import CertList from './CertList';
import Rent from './Rent';
import RentList from './RentList';
import SellList from './SellList';
import Sell from './Sell';
import Copyright from './Copyright';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact={true} path="/" component={LandingPage} />
          <Route exact={true} path="/Cert/:ID" component={Cert} />
          <Route exact={true} path="/CertList" component={CertList} />
          <Route exact={true} path="/NewCert" component={NewCert} />
          <Route exact={true} path="/Rent/:ID" component={Rent} />
          <Route exact={true} path="/RentList" component={RentList} />
          <Route exact={true} path="/SellList" component={SellList} />
          <Route exact={true} path="/Sell/:ID" component={Sell} />
        </Switch>
      </Router>
      <Copyright />
    </div>
  );
}

export default App;
