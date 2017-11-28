import React,{ Component } from 'react';
import { Menu, Icon  } from 'antd';
const SubMenu = Menu.SubMenu;




const menu =[
  {
    name:"订单管理",
    id:"1",
    key:"1",
    children:[
      {
        name:"已开始的订单",
        key:"1-1",
        id:"1-1"
      },{
        name:"未开始的订单",
        key:"1-2",
        id:"1-2"
      },{
        name:"已关闭的订单",
        key:"1-3",
        id:"1-3"
      },{
        name:"未分配的订单",
        key:"1-4",
        id:"1-4"
      }
    ]
  },
  {
    name:"人员管理",
    id:"2",
    key:"2",
    children:[
      {
        name:"用户管理",
        key:"2-1",
        id:"2-1"
      },{
        name:"权限管理",
        key:"2-2",
        id:"2-2"
      }
    ]
  }
]

export default class Menus extends React.Component {

  constructor(props) {
    super(props);
    this.onOpenChange=this.onOpenChange.bind(this);
  }

  onOpenChange(key) {
    this.props.handleOnclick(key.key)
  }

  render() {
    return (
      <Menu
          mode="inline"
          onClick={this.onOpenChange}
          theme="dark"
        >
          {
            menu.map((data,index)=>{
              return (
                <SubMenu key={data.key} title={<span style={{fontSize:"16px"}}>{data.name}</span>} >
                  {
                    data.children.map((data1,index1)=>{
                      return (
                        <Menu.Item key={data1.key}>{data1.name}</Menu.Item>
                      )
                    })
                  }
                </SubMenu>
              )
            })
          }
        </Menu>
    )
  }
}
