import { Row, Col,Form, Button,Input,Select,DatePicker} from 'antd';
import React,{ Component } from 'react';
import './BaseSearch.less';
const FormItem = Form.Item;
const Option = Select.Option;

@Form.create()
export default class BaseSearch extends React.Component {
    constructor(props) {
      super(props);
      this.handleSearch=this.handleSearch.bind(this);
    }

    handleSearch(e) {
    e.preventDefault();
     this.props.form.validateFields((err, values) => {
       if (!err) {
         console.log('Received values of form: ', values);
       }
     });
    }


  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
          labelCol: { span: 6 },
          wrapperCol: { span: 14 },
        };
    return (
      <div className="baseSearch-searchBox">
        <Form>
          <Row span={21}>
          <Col span={7}>
            <FormItem
              {...formItemLayout}
              label="订单编号"
              >
                {getFieldDecorator('input', {
               })(
                 <Input />
               )}
            </FormItem>
          </Col>
          <Col span={7}>
            <FormItem
              {...formItemLayout}
              label="订单状态"
              >
                {getFieldDecorator('Select', {
               })(
                 <Select>
                   <Option value="jack2">Jack2</Option>
                   <Option value="jack3">Jack3</Option>
                   <Option value="jack4">Jack4</Option>
                 </Select>
               )}
            </FormItem>
          </Col>
          <Col span={7}>
            <FormItem
              {...formItemLayout}
              label="订单编号2"
              >
                {getFieldDecorator('input2', {
               })(
                 <Input/>
               )}
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={7}>
            <FormItem
              {...formItemLayout}
              label="订单编号3"
              >
                {getFieldDecorator('input3', {
               })(
                 <Input />
               )}
            </FormItem>
          </Col>
          <Col span={7}>
            <FormItem
              {...formItemLayout}
              label="订单状态2"
              >
                {getFieldDecorator('Select2', {
               })(
                 <Select>
                   <Option value="jack2">Jack2</Option>
                   <Option value="jack3">Jack3</Option>
                   <Option value="jack4">Jack4</Option>
                 </Select>
               )}
            </FormItem>
          </Col>
          <Col span={7}>
            <FormItem
              {...formItemLayout}
              label="订单编号4"
              >
                {getFieldDecorator('input4', {
               })(
                 <Input/>
               )}
            </FormItem>
          </Col>
          </Row>
        </Form>
        <div className="baseSearch-serachButton">
            <Button style={{width:"110px"}} icon="search" type="primary" onClick={this.handleSearch}>搜索</Button>
            <Button style={{width:"110px"}} type="primary" icon="download">导出</Button>
        </div>
      </div>
    )
  }
}
