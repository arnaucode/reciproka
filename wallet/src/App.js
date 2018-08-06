import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';

import dashboardView from './views/dashboard/dashboard';


import './eth/eth.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>

          <nav className="navbar navbar-light bg-light">
            {/* <span className="emptyHorizontal40"></span> */}
            <a className="navbar-brand" href="">
              <img src={require('./img/app-icon.png')} width="30" height="30" className="d-inline-block align-top" alt=""/>
              idWallet
            </a>
          </nav>
          {/* <SideMenu/> */}
          <main className="container">
            <br/>
            <div id="view">
              <Switch>
                <Route exact="exact" path="/" component={dashboardView}></Route>
              </Switch>
            </div>
          </main>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
