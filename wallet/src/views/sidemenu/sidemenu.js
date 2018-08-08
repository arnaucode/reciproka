import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink } from 'react-router-dom'

import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;



class dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <Menu.Item key="1">
          <NavLink to="/">
            <Icon type="home" />Dashboard
          </NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink to="/newtx">
            <Icon type="plus" />New transaction
          </NavLink>
      </Menu.Item>
          <Menu.Item key="3">
            <NavLink to="/notyet">
            <Icon type="calendar" />History
          </NavLink>
        </Menu.Item>
        <Menu.Item key="4">
          <NavLink to="/notyet">
            <Icon type="pie-chart" />Stats
          </NavLink>
        </Menu.Item>
      </Menu>
    );
  }
}

export default dashboard;
