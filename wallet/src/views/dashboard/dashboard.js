import React, { Component } from 'react';

import mem from '../../mem/mem';

// import {card, tx} from '../../kit/lib'
import { Card, Button, Timeline, Row, Col, List, Icon } from 'antd';
import 'antd/dist/antd.css';


import {Line, Doughnut} from 'react-chartjs-2';

var chartLineData = {
  labels: ['September', 'October', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
  datasets: [{
    label: 'Balance',
    backgroundColor: 'rgba(54, 162, 235, 0)',
    borderColor: 'rgba(54, 162, 235, 1)',
    borderWidth: 1,
    hoverBackgroundColor: 'rgba(54, 162, 235,0.4)',
    hoverBorderColor: 'rgba(54, 162, 235,1)',
    data: [0, 59, 55, -50, -56, 120, 40, -20, 10, 45]
  }]
};
var chartDoughnutData = {
  labels: ['Received', 'Sended'],
  datasets: [{
    label: 'Identities use',
    backgroundColor: ['#36A2EB', '#FF6384'],
		hoverBackgroundColor: ['#36A2EB', '#FF6384'],
    data: [25, 20]
  }]
};

const listData = [
  'New transaction received',
  'Sended new transaction'
];

class dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }
  render() {
    return (
      <div>
        <Row gutter={16}>
          <Col span={8}>
            <p>Current Credit balance: <b>{mem.balance}</b></p>
            <p style={{fontSize: 10}}>Current ETH balance: {mem.ethBalance}</p>
            <Line
              height={200}
              data={chartLineData}
            />
          </Col>
          <Col span={8}>
            <Card title="Notifications" extra={<a href="#">More</a>}>
              <List>
                <List.Item>
                  <Icon type="check" /> Transaction received
                </List.Item>
                <List.Item>
                  <Icon type="check" /> Transaction sended
                </List.Item>
                <List.Item>
                  <Icon type="export" /> Backup imported
                </List.Item>
                <List.Item>
                  <Icon type="save" /> Backup exported
                </List.Item>
              </List>
            </Card>
          </Col>
          <Col span={8}>

          </Col>
        </Row>
        <br/>
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Last transactions" extra={<a href="#">More</a>}>
                <Timeline>
                  <Timeline.Item color="green">
                    Received 10 credits · <i>2018-08-07</i>
                  </Timeline.Item>
                  <Timeline.Item color="red">
                    Sended 20 credits · <i>2018-08-06</i>
                  </Timeline.Item>
                  <Timeline.Item color="red">
                    Sended 20 credits · <i>2018-08-05</i>
                  </Timeline.Item>
                  <Timeline.Item color="green">
                    Received 15 credits · <i>2018-08-05</i>
                  </Timeline.Item>
                  <Timeline.Item color="green">
                    Received 15 credits · <i>2018-08-04</i>
                  </Timeline.Item>
                  <Timeline.Item>
                    Account created · <i>2018-08-03</i>
                  </Timeline.Item>
                </Timeline>
              </Card>
            </Col>

              <Col span={8}>
                <Doughnut
                  height={200}
                  data={chartDoughnutData}
                />
              </Col>
          </Row>

      </div>
    );
  }
}

export default dashboard;
