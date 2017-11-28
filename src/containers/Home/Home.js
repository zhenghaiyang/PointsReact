import React,{ Component } from 'react';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import './Home.less';
import {
  Menus,
  HeaderLogo,
  HeaderUserInfo,
  Closed,
} from '../../components';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      key:''
    }
    this.handleOnclick=this.handleOnclick.bind(this);
  }

  handleOnclick(key) {
    this.setState({
      key:key
    })
  }

  renderPage() {
    switch (this.state.key) {
      case '1-1':
        return (null)
      case '1-2':
        return (null)
      case '1-3':
        return (<div style={{margin: '30px'}}><Closed/></div>)
      default:
        return
    }
  }

  render() {
    return (
      <Layout className="layout-center">
        <Sider width="256px" className="layout-center-sider">
          <HeaderLogo/>
          <Menus handleOnclick={key=>this.handleOnclick(key)}/>
        </Sider>
        <Layout style={{background:'white'}}>
          <Header className="layout-header">
            <div className="layout-header-userinfo">
              <HeaderUserInfo/>
            </div>
          </Header>
          <Content style={{margin:'24px 24px 0px',height:'100%',background:'#f0f2f5'}}>
             {this.renderPage()}
          </Content>
          <Footer style={{background:'white',margin:'0px 24px'}}>

          </Footer>
        </Layout>
      </Layout>
    )
  }
}
