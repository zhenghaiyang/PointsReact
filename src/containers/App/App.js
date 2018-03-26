import React,{ Component } from 'react';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import './App.less';
import {
  Menus,
  HeaderLogo,
  HeaderUserInfo,
} from '../../components';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    //console.log(this.props)
    return (
      <Layout className="layout-center">
        <Sider width="256px" className="layout-center-sider">
          <HeaderLogo/>
          <Menus />
        </Sider>
        <Layout style={{background:'white'}}>
          <Header className="layout-header">
            <div className="layout-header-userinfo">
              <HeaderUserInfo/>
            </div>
          </Header>
          <Content style={{margin:'24px 24px 0px',height:'100%',background:'#f0f2f5'}}>
             {this.props.children}
          </Content>
          <Footer style={{background:'white',margin:'0px 24px'}}>

          </Footer>
        </Layout>
      </Layout>
    )
  }
}
