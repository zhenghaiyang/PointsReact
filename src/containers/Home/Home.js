import React,{ Component } from 'react';
import { Layout,Icon,Input,Popover } from 'antd';
import './Home.less';
import {
  BaseCarousel,
  HomeMenu
} from '../../components';
const { Header, Content, Footer } = Layout;


const imgurl=[
  {
    name:"第一次旅行",
    url:require("../../../static/image/1.jpg")
  },{
    name:"第二次旅行",
    url:require("../../../static/image/2.jpg")
  },{
    name:"第三次旅行",
    url:require("../../../static/image/3.jpg")
  },{
    name:"第四次旅行",
    url:require("../../../static/image/4.jpg")
  },{
    name:"第五次旅行",
    url:require("../../../static/image/5.jpg")
  }
]

const menulist=[
  {
    name:"首页",
    path:"/",
    key:"首页"
  },{
    name:"目的地",
    path:"/mudidi",
    key:"目的地"
  },{
    name:"跟团游",
    path:"/gentuanyou",
    key:"跟团游",
    children:[
      {
        name:"出境跟团",
        path:"/chujinggentuan",
        key:"出境跟团"
      },{
        name:"国内跟团",
        path:"/guoneigentuan",
        key:"国内跟团"
      },{
        name:"周边跟团",
        path:"/zhoubiangentuan",
        key:"周边跟团"
      }
    ]
  },{
    name:"锦囊",
    path:"/jinnang",
    key:"锦囊"
  },{
    name:"社区",
    path:"/shequ",
    key:"社区",
    children:[
      {
        name:"测试社区一",
        path:"/ceshishequyi",
        key:"测试社区一"
      },{
        name:"测试社区二",
        path:"/ceshishequer",
        key:"测试社区二"
      },{
        name:"测试社区三",
        path:"/ceshishequsan",
        key:"测试社区三"
      }
    ]
  }
]

const content = (
  <div className="QR-code">
    <img src={require("../../../static/image/QRcode.jpg")} style={{width:"100%",height:"100%"}}/>
  </div>
)

export default class Home extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <div style={{height:'527px'}}>
          <Header className="p-header">
            <div className="p-header-nav-wrapper">
              <div className="p-header-logo">
                <a href="/"><img src={require('../../../static/image/logo_20170124.png')}/></a>
              </div>
              <div className="p-header-nav">
                <HomeMenu
                  menulist={menulist}
                />
              </div>
            </div>
            <div className="p-header-user-wrapper">
              <div className="p-header-search">
                <Input
                  suffix={<Icon type="search" style={{fontSize:'16px'}}/>}
                />
              </div>
              <span className="p-header-cut">|</span>
              <div className="p-header-user-status">
                <div className="p-header-login">
                  <Popover content={content}>
                    <Icon type="wechat" className="p-header-login-icon-span"/>
                  </Popover>
                  <a href="/">注册</a>
                  <a href="/">登录</a>
                </div>
              </div>
            </div>
          </Header>
          <BaseCarousel
            imgurl={imgurl}
          />
        </div>
        <Content style={{height:'500px'}}>

        </Content>
        <Footer>

        </Footer>
      </Layout>
    )
  }
}
