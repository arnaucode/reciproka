import React, { Component } from 'react';

import mem from '../../mem/mem';

// import {card, tx} from '../../kit/lib'
import { Card, Button, Timeline, Row, Col, List, Icon,
          Form, Input, InputNumber, Checkbox, message,
        Progress } from 'antd';
import 'antd/dist/antd.css';
const FormItem = Form.Item;



class newtx extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receiver: '',
      value: 0,
      percent: 0
    };
    this.handleReceiverInputChange = this.handleReceiverInputChange.bind(this);
    this.handleValueInputChange = this.handleValueInputChange.bind(this);
    this.sendTx = this.sendTx.bind(this);
    console.log("addr", mem.account.address);
  }
  handleReceiverInputChange(event) {
    this.setState({receiver: event.target.value})
  }
  handleValueInputChange(value) {
    this.setState({value: value})
  }
  sendTx(event) {
    var receiver = this.state.receiver
    console.log("receiver: ", receiver)
    var value = this.state.value
    console.log("value: ", value)
    console.log(mem.accountsContractAddr)
    console.log(mem.accountsContract)
    console.log("options", mem.accountsContract.options)
    mem.accountsContract.options.from = mem.account.address
    mem.accountsContract.options.gas = 4000000
    console.log("options", mem.accountsContract.options)

    this.setState({ percent: this.state.percent + 20})

    mem.accountsContract.methods.updateBalance(receiver, value)
      .send(
      function(error, result) {
        if(!error) {
          console.log("result: ", result)
            this.setState({ percent: 100 })

        } else {
          console.log("error: ", error)
          message.error("Error on sending credits");
            this.setState({ percent: 0 })
        }
      }
    );
  }
  updateProgress(val) {
    this.setState({ percent: val })
  }
  render() {
    const { receiver, value } = this.state;
    return (
      <div>
        <Row gutter={16}>
          <Col span={14}>
            <Card title="New transaction">
              <Input
                placeholder="address"
                prefix={<Icon type="qrcode" style={{ color: 'rgba(0,0,0,.25)' }} />}
                style={{ width: 400 }}
                onChange={this.handleReceiverInputChange}
              />
              <br/><br/>
              <InputNumber
                min={0}
                defaultValue={0}
                style={{marginRight: 10}}
                onChange={this.handleValueInputChange} />

              <Button
                type="primary"
                icon="check"
                onClick={this.sendTx}
                >
                Send
              </Button>
              <br/><br/>
              <Progress percent={this.state.percent} />
            </Card>
          </Col>
        </Row>

      </div>
    );
  }
}

export default newtx;
