import React, { Component } from 'react';
import './HomeAboutMe.less';
import { Icon } from 'antd';


export default class HomeAboutMe extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    let datasource = this.props.datasource;
    return (
      <div className="homeaboutme-content">
        <div className="homeaboutme-wrap">
          <ul>
            <li>
              <dl>
                <dt>关于我们</dt>
                <dd className="homeaboutme-QRcode">
                  <img src={datasource.logoPath} style={{width:"100%",height:"100%"}}/>
                </dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>联系我们</dt>
                <dd className="aboutme-font">邮箱</dd>
                <dd className="aboutme-font">QQ</dd>
                <dd className="aboutme-font">微信号</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>互动支持</dt>
                <dd className="aboutme-font">提出意见</dd>
                <dd className="aboutme-font">寻求合作</dd>
                <dd className="aboutme-font">广告植入</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>关注我们</dt>
                <dd>
                  <Icon type="weibo"  className="aboutme-icon"/>
                </dd>
                <dd>
                  <Icon type="aliwangwang" className="aboutme-icon"/>
                </dd>
                <dd>
                  <Icon type="taobao" className="aboutme-icon"/>
                </dd>
              </dl>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
