import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';


import { Row, Col } from 'antd';

import mem from './mem/mem';
import DashboardView from './views/dashboard/dashboard';
import NewTxView from './views/newtx/newtx';
import NotYet from './views/notyet/notyet';
import SidemenuView from './views/sidemenu/sidemenu';


import './eth/eth';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: mem.account
    }
  }
  render() {
    return (
      <BrowserRouter>
        <div>

          <nav className="navbar navbar-light bg-light">
            {/* <span className="emptyHorizontal40"></span> */}
            <a className="navbar-brand" href="">
              <img src={require('./img/app-icon.png')} width="30" height="30" className="d-inline-block align-top"
              style={{marginRight:10}} />
               reciproka wallet
            </a>
            <div>
              Account: <b>{this.state.account.address}</b>
            </div>
          </nav>
          {/* <SideMenu/> */}

          <Row gutter={16}>
            <Col span={4}>
              <SidemenuView></SidemenuView>
            </Col>
            <Col span={20}>
              <br/>
              <Switch>
                <Route exact={true} path="/" component={DashboardView}></Route>
                <Route path="/newtx" component={NewTxView}></Route>
                <Route path="/notyet" component={NotYet}></Route>
              </Switch>
            </Col>
          </Row>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
