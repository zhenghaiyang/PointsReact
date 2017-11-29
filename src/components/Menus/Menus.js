import React,{ Component } from 'react';
import { Menu, Icon  } from 'antd';
import { Link,NavLink } from 'react-router-dom';
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
        id:"1-1",
        linkto:"/aaaa"
      },{
        name:"未开始的订单",
        key:"1-2",
        id:"1-2",
        linkto:"bbbb"
      },{
        name:"已关闭的订单",
        key:"1-3",
        id:"1-3",
        linkto:"/home/closed"
      },{
        name:"未分配的订单",
        key:"1-4",
        id:"1-4",
        linkto:"0002"
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
        id:"2-1",
        linkto:"98989"
      },{
        name:"权限管理",
        key:"2-2",
        id:"2-2",
        linkto:"33424"
      }
    ]
  }
]

export default class Menus extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Menu
          mode="inline"
          theme="dark"
        >
          {
            menu.map((data,index)=>{
              return (
                <SubMenu key={data.key} title={<span style={{fontSize:"16px"}}>{data.name}</span>} >
                  {
                    data.children.map((data1,index1)=>{
                      return (
                        <Menu.Item key={data1.key}><NavLink exact to={data1.linkto}>{data1.name}</NavLink></Menu.Item>
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
