import {Select } from 'antd';
import React,{ Component } from 'react';
const Option = Select.Option;

export default class SelectGroup extends Component {
  render() {
    return (
      <div>
        <Select defaultValue="lucy" style={{ width: 120 }}>
         <Option value="jack">Jack</Option>
         <Option value="lucy">Lucy</Option>
         <Option value="disabled" disabled>Disabled</Option>
         <Option value="Yiminghe">yiminghe</Option>
       </Select>
       <Select defaultValue="lucy" style={{ width: 120 }}>
         <Option value="lucy">Lucy</Option>
         <Option value="lucy1">Lucy1</Option>
         <Option value="lucy2">Lucy2</Option>
         <Option value="lucy3">Lucy3</Option>
       </Select>
      </div>
    )
  }
}
