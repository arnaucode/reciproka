import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';


import { Row, Col } from 'antd';

import DashboardView from './views/dashboard/dashboard';
import NewTxView from './views/newtx/newtx';
import SidemenuView from './views/sidemenu/sidemenu';


import './eth/eth.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>

          <nav className="navbar navbar-light bg-light">
            {/* <span className="emptyHorizontal40"></span> */}
            <a className="navbar-brand" href="">
              <img src={require('./img/app-icon.png')} width="30" height="30" className="d-inline-block align-top" />
               reciproka wallet
            </a>
            <b>0xa</b>
          </nav>
          {/* <SideMenu/> */}

          <Row gutter={16}>
            <Col span={4}>
              <SidemenuView></SidemenuView>
            </Col>
            <Col span={20}>
              <br/>
              <Switch>
                <Route exact="exact" path="/" component={DashboardView}></Route>
                <Route path="/newtx" component={NewTxView}></Route>
              </Switch>
            </Col>
          </Row>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
