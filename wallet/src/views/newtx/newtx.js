import React, { Component } from 'react';

// import {card, tx} from '../../kit/lib'
import { Card, Button, Timeline, Row, Col, List, Icon,
          Form, Input, InputNumber, Checkbox } from 'antd';
import 'antd/dist/antd.css';
const FormItem = Form.Item;



class newtx extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receiver: '',
      value: 0
    };

  }
  render() {
    const { receiver, value } = this.state;
    return (
      <div>
        <Row gutter={16}>
          <Col span={12}>
            <Card title="New transaction">
              <Input
                placeholder="address"
                prefix={<Icon type="qrcode" style={{ color: 'rgba(0,0,0,.25)' }} />}
                style={{ width: 200 }}
              />
              <br/><br/>
              <InputNumber
                min={0}
                defaultValue={0}
                style={{marginRight: 10}} />

              <Button type="primary" icon="check">Send</Button>
            </Card>
          </Col>
        </Row>

      </div>
    );
  }
}

export default newtx;
