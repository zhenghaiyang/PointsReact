import React,{ Component } from 'react';
import { Table } from 'antd';
import { BaseSearch } from '../../../components';

const dataSource = [{
  key: '1',
  name: '胡彦斌',
  age: 32,
  address: '西湖区湖底公园1号'
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
}];
const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '住址',
  dataIndex: 'address',
  key: 'address',
}];

export default class Closed extends React.Component {
  render() {
    return (
      <div>
        <div>
          <BaseSearch/>
        </div>
        <div style={{marginTop:"30px"}}>
          <Table
            dataSource={dataSource}
            columns={columns}
          />
        </div>
      </div>
    )
  }
}
