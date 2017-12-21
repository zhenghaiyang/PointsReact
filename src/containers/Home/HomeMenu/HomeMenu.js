import React,{ Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link,NavLink } from 'react-router-dom';
import './HomeMenu.less';
const SubMenu = Menu.SubMenu;

export default class HomeMenu extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log('HomeMenu')
    console.log(this.props)
    console.log('HomeMenu')
    let menulist = this.props.menulist
    return (
      <Menu
        mode="horizontal"
        style={{
          fontSize: "16px",
          color: "#fff",
          fontWeight: "700",
          borderBottom: "none",
          background: "rgba(0, 0, 0, 0)",
          lineHeight: "64px"
        }}
        >
        {
          menulist && menulist.map((data,index)=>{
            console.log(data)
            return (
              <SubMenu key={data.key}
                title={<span style={{fontSize:"16px"}} className="submenu-a">
                  <NavLink exact to={data.path}>{data.name}{data.children?(<Icon type="down"/>):null}</NavLink>
                </span>}
                >
                {
                  data.children && data.children.map((data1,index1)=>{
                    return (
                      <Menu.Item key={data1.key} >
                        <NavLink exact to={data1.path}>{data1.name}</NavLink>
                      </Menu.Item>
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
