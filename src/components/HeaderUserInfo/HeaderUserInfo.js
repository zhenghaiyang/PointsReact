import React,{ Component } from 'react';
import { Icon,Badge } from 'antd';
import './HeaderUserInfo.less';
var icons = require("../../../static/ProfessionIcon/dk.jpg");


export default class HeaderUserInfo extends React.Component {

  constructor(props) {
    super(props);
    this.handleGoUserInfo=this.handleGoUserInfo.bind(this);
    this.goOut=this.goOut.bind(this);
  }

  handleGoUserInfo() {
    window.location.href="/userinfo"
  }
  goOut() {
    window.location.href="/"
  }

  render() {
    //console.log("4444444444")
    return (
      <div>
        <span className="header-user-info-bell">
          <Badge dot={true}>
            <Icon type="bell" color="white" style={{ fontSize: '16px',color:"white"}}/>
          </Badge>
        </span>
        <span className="header-user-info-bell">
          <img src={icons} width="40px" height="40px" style={{ verticalAlign: 'middle', borderRadius: '4px' }}/>
        </span>
        <span onClick={this.handleGoUserInfo} className="header-user-info-name">
          王金超
        </span>
        <span className="header-user-info-out" onClick={this.goOut}>
          退出
        </span>
      </div>
    )
  }
}
