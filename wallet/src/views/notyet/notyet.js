import React, { Component } from 'react';

import mem from '../../mem/mem';

// import {card, tx} from '../../kit/lib'
import { Card, Button, Timeline, Row, Col, List, Icon,
          Form, Input, InputNumber, Checkbox, message,
        Progress } from 'antd';
import 'antd/dist/antd.css';
const FormItem = Form.Item;



class notyet extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Card>
          Not yet, but meanwhile, here is a penguin <b style={{fontSize:20}}>🐧</b>
        </Card>
      </div>
    );
  }
}

export default notyet;
