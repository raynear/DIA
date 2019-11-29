import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Container } from "@material-ui/core";

import Web3 from "web3";

import Header from './Header';
import LandingPage from './LandingPage';
import NewDiamond from './NewDiamond';
import MyDiamondList from './MyDiamondList';
import DiamondList from './DiamondList';
import Diamond from './Diamond';
import Investor from './Investor';
import Config from './Config';
import Copyright from './Copyright';

function App() {
  const web3 = new Web3((window as any).web3.currentProvider);

  window.addEventListener('load', async () => {
    // Modern dapp browsers...
    if ((window as any).ethereum) {
      (window as any).web3 = new Web3((window as any).ethereum);
      try {
        // Request account access if needed
        await (window as any).ethereum.enable();
        // Acccounts now exposed
      } catch (error) {
        // User denied account access...
      }
    }
    // Legacy dapp browsers...
    else if ((window as any).web3) {
      (window as any).web3 = new Web3(web3.currentProvider);
    }
    // Non-dapp browsers...
    else {
      console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
  });

  return (
    <div className="App">
      <Container maxWidth="lg">
        <Header />
        <Router>
          <Switch>
            <Route exact={true} path="/DIA/" component={LandingPage} />
            <Route exact={true} path="/DIA/MyDiamondList" component={MyDiamondList} />
            <Route exact={true} path="/DIA/NewDiamond" component={NewDiamond} />
            <Route exact={true} path="/DIA/DiamondList" component={DiamondList} />
            <Route exact={true} path="/DIA/Diamond/:ID" component={Diamond} />
            <Route exact={true} path="/DIA/Investor" component={Investor} />
            <Route exact={true} path="/DIA/Config" component={Config} />
          </Switch>
        </Router>
        <Copyright />
      </Container>
    </div>
  );
}

export default App;
