import React,{ Component } from 'react';
import { Layout,Icon,Input,Popover,BackTop  } from 'antd';
import './Home.less';
import {
  BaseCarousel,
} from '../../components';
import {
  HomeStrategy,
  HomeScenery,
  HomeToday,
  HomeFood,
  HomeADimage,
  HomeRight,
  HomeMenu,
  HomeFoot,
  HomeAboutMe
} from '../../containers';
const { Header, Content, Footer } = Layout;


// const imgurl=[
//   {
//     name:"第一次旅行",
//     url:require("../../../static/image/1.jpg")
//   },{
//     name:"第二次旅行",
//     url:require("../../../static/image/2.jpg")
//   },{
//     name:"第三次旅行",
//     url:require("../../../static/image/3.jpg")
//   },{
//     name:"第四次旅行",
//     url:require("../../../static/image/4.jpg")
//   },{
//     name:"第五次旅行",
//     url:require("../../../static/image/5.jpg")
//   }
// ]
const imgurl=[
  {
    name:"第一次旅行",
    url:require("../../../static/image/1.jpg")
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

const imageList =[
  {
    type:'1', // 1 美食 , 2 景色 ,3 游记
    typename:"美食",
    imgurl:require("../../../static/image/today/food3.jpg"),
    info:{
      looknumber:128764, // 多少人看过
      province:"郑州", // 城市
      message:"中原特色,中原一绝,流连忘返,"
    }
  },{
    type:'1', // 1 美食 , 2 景色 ,3 游记
    typename:"美食",
    imgurl:require("../../../static/image/today/food2.jpg"),
    info:{
      looknumber:128764, // 多少人看过
      province:"开封", // 城市
      message:"中原特色,中原一绝,流连忘返,"
    }
  },{
    type:'2', // 1 美食 , 2 景色 ,3 游记
    typename:"景色",
    imgurl:require("../../../static/image/today/scenery3.jpg"),
    info:{
      looknumber:128764, // 多少人看过
      province:"开封", // 城市
      message:"中原特色,中原一绝,流连忘返,"
    }
  },{
    type:'2', // 1 美食 , 2 景色 ,3 游记
    typename:"景色",
    imgurl:require("../../../static/image/today/scenery4.jpg"),
    info:{
      looknumber:128764, // 多少人看过
      province:"开封", // 城市
      message:"中原特色,中原一绝,流连忘返,"
    }
  },{
    type:'1', // 1 美食 , 2 景色 ,3 游记
    typename:"美食",
    imgurl:require("../../../static/image/today/food1.jpg"),
    info:{
      looknumber:128764, // 多少人看过
      province:"开封", // 城市
      message:"中原特色,中原一绝,流连忘返,"
    }
  },{
    type:'3', // 1 美食 , 2 景色 ,3 游记
    typename:"游记",
    imgurl:require("../../../static/image/today/note1.jpg"),
    info:{
      looknumber:128764, // 多少人看过
      province:"开封", // 城市
      message:"中原特色,中原一绝,流连忘返,"
    }
  },{
    type:'3', // 1 美食 , 2 景色 ,3 游记
    typename:"游记",
    imgurl:require("../../../static/image/today/note2.jpg"),
    info:{
      looknumber:128764, // 多少人看过
      province:"开封", // 城市
      message:"中原特色,中原一绝,流连忘返,"
    }
  },{
    type:'2', // 1 美食 , 2 景色 ,3 游记
    typename:"景色",
    imgurl:require("../../../static/image/today/scenery8.jpg"),
    info:{
      looknumber:128764, // 多少人看过
      province:"开封", // 城市
      message:"中原特色,中原一绝,流连忘返,"
    }
  }
]

const scenerylist =[
  {
    type:"2", // 1 美食 2 景色 3 游记
    imgurl:require("../../../static/image/scenery/1.jpeg"),
    isLeft:true,
    isRight:false,
    info:{
      looknumber:128764, // 多少人看过
      province:"郑州", // 城市
      message:"中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返,"
    }
  },{
    type:"2", // 1 美食 2 景色 3 游记
    imgurl:require("../../../static/image/scenery/2.1.jpeg"),
    isLeft:false,
    isRight:false,
    info:{
      looknumber:128764, // 多少人看过
      province:"郑州", // 城市
      message:"中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返,"
    }
  },{
    type:"2", // 1 美食 2 景色 3 游记
    imgurl:require("../../../static/image/scenery/2.2.jpeg"),
    isLeft:false,
    isRight:false,
    info:{
      looknumber:128764, // 多少人看过
      province:"郑州", // 城市
      message:"中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返,"
    }
  },{
    type:"2", // 1 美食 2 景色 3 游记
    imgurl:require("../../../static/image/scenery/2.3.jpeg"),
    isLeft:false,
    isRight:false,
    info:{
      looknumber:128764, // 多少人看过
      province:"郑州", // 城市
      message:"中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返,"
    }
  },{
    type:"2", // 1 美食 2 景色 3 游记
    imgurl:require("../../../static/image/scenery/2.4.jpeg"),
    isLeft:false,
    isRight:false,
    info:{
      looknumber:128764, // 多少人看过
      province:"郑州", // 城市
      message:"中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返,"
    }
  },{
    type:"2", // 1 美食 2 景色 3 游记
    imgurl:require("../../../static/image/scenery/3.jpeg"),
    isLeft:false,
    isRight:true,
    info:{
      looknumber:128764, // 多少人看过
      province:"郑州", // 城市
      message:"中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返,"
    }
  }
]

const strategtlist =[
  {
    type:"2", // 1 美食 2 景色 3 游记
    imgurl:require("../../../static/image/scenery/1.jpeg"),
    isLeft:true,
    isRight:false,
    info:{
      looknumber:128764, // 多少人看过
      province:"郑州", // 城市
      message:"中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返,"
    }
  },{
    type:"2", // 1 美食 2 景色 3 游记
    imgurl:require("../../../static/image/scenery/2.1.jpeg"),
    isLeft:false,
    isRight:false,
    info:{
      looknumber:128764, // 多少人看过
      province:"郑州", // 城市
      message:"中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返,"
    }
  },{
    type:"2", // 1 美食 2 景色 3 游记
    imgurl:require("../../../static/image/scenery/2.2.jpeg"),
    isLeft:false,
    isRight:false,
    info:{
      looknumber:128764, // 多少人看过
      province:"郑州", // 城市
      message:"中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返,"
    }
  },{
    type:"2", // 1 美食 2 景色 3 游记
    imgurl:require("../../../static/image/scenery/2.3.jpeg"),
    isLeft:false,
    isRight:false,
    info:{
      looknumber:128764, // 多少人看过
      province:"郑州", // 城市
      message:"中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返,"
    }
  },{
    type:"2", // 1 美食 2 景色 3 游记
    imgurl:require("../../../static/image/scenery/2.4.jpeg"),
    isLeft:false,
    isRight:false,
    info:{
      looknumber:128764, // 多少人看过
      province:"郑州", // 城市
      message:"中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返,"
    }
  },{
    type:"2", // 1 美食 2 景色 3 游记
    imgurl:require("../../../static/image/scenery/3.jpeg"),
    isLeft:false,
    isRight:true,
    info:{
      looknumber:128764, // 多少人看过
      province:"郑州", // 城市
      message:"中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返,"
    }
  }
]

const foodlist =[
  {
    type:"2", // 1 美食 2 景色 3 游记
    imgurl:require("../../../static/image/scenery/1.jpeg"),
    isLeft:true,
    isRight:false,
    info:{
      looknumber:128764, // 多少人看过
      province:"郑州", // 城市
      message:"中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返,"
    }
  },{
    type:"2", // 1 美食 2 景色 3 游记
    imgurl:require("../../../static/image/scenery/2.1.jpeg"),
    isLeft:false,
    isRight:false,
    info:{
      looknumber:128764, // 多少人看过
      province:"郑州", // 城市
      message:"中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返,"
    }
  },{
    type:"2", // 1 美食 2 景色 3 游记
    imgurl:require("../../../static/image/scenery/2.2.jpeg"),
    isLeft:false,
    isRight:false,
    info:{
      looknumber:128764, // 多少人看过
      province:"郑州", // 城市
      message:"中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返,"
    }
  },{
    type:"2", // 1 美食 2 景色 3 游记
    imgurl:require("../../../static/image/scenery/2.3.jpeg"),
    isLeft:false,
    isRight:false,
    info:{
      looknumber:128764, // 多少人看过
      province:"郑州", // 城市
      message:"中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返,"
    }
  },{
    type:"2", // 1 美食 2 景色 3 游记
    imgurl:require("../../../static/image/scenery/2.4.jpeg"),
    isLeft:false,
    isRight:false,
    info:{
      looknumber:128764, // 多少人看过
      province:"郑州", // 城市
      message:"中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返,"
    }
  },{
    type:"2", // 1 美食 2 景色 3 游记
    imgurl:require("../../../static/image/scenery/3.jpeg"),
    isLeft:false,
    isRight:true,
    info:{
      looknumber:128764, // 多少人看过
      province:"郑州", // 城市
      message:"中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返,"
    }
  }
]

const adImagelist=[
  {
    name:"滴滴打车广告",
    path:"https://pic.qyer.com/ra/img/15129830654467"
  },{
    name:"饿了么广告",
    path:require("../../../static/image/AD/elm2.jpg"),
  }
]

const rightAD = [
  {
    title:"美食排行",
    data:[
      {
        type:"1",
        imgurl:require("../../../static/image/scenery/3.jpeg"),
        info:{
          looknumber:128764, // 多少人看过
          province:"郑州", // 城市
          synopsis:"这是简介这是简介这是简介",
          message:"中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返,"
        }
      },{
        type:"1",
        imgurl:require("../../../static/image/scenery/3.jpeg"),
        info:{
          looknumber:128764, // 多少人看过
          province:"郑州", // 城市
          synopsis:"这是简介这是简介这是简介",
          message:"中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返,"
        }
      },{
        type:"1",
        imgurl:require("../../../static/image/scenery/3.jpeg"),
        info:{
          looknumber:128764, // 多少人看过
          province:"郑州", // 城市
          synopsis:"这是简介这是简介这是简介",
          message:"中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返,"
        }
      },{
        type:"1",
        imgurl:require("../../../static/image/scenery/3.jpeg"),
        info:{
          looknumber:128764, // 多少人看过
          province:"郑州", // 城市
          synopsis:"这是简介这是简介这是简介",
          message:"中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返,"
        }
      },{
        type:"1",
        imgurl:require("../../../static/image/scenery/3.jpeg"),
        info:{
          looknumber:128764, // 多少人看过
          province:"郑州", // 城市
          synopsis:"这是简介这是简介这是简介",
          message:"中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返,"
        }
      }
    ]
  },{
    title:"景点排行",
    data:[
      {
        type:"2", // 1 美食 2 景色 3 游记
        imgurl:require("../../../static/image/scenery/2.4.jpeg"),
        info:{
          looknumber:128764, // 多少人看过
          province:"郑州", // 城市
          synopsis:"这是简介这是简介这是简介",
          message:"中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返,"
        }
      },{
        type:"2", // 1 美食 2 景色 3 游记
        imgurl:require("../../../static/image/scenery/2.4.jpeg"),
        info:{
          looknumber:128764, // 多少人看过
          province:"郑州", // 城市
          synopsis:"这是简介这是简介这是简介",
          message:"中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返,"
        }
      },{
        type:"2", // 1 美食 2 景色 3 游记
        imgurl:require("../../../static/image/scenery/2.4.jpeg"),
        info:{
          looknumber:128764, // 多少人看过
          province:"郑州", // 城市
          synopsis:"这是简介这是简介这是简介",
          message:"中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返,"
        }
      },{
        type:"2", // 1 美食 2 景色 3 游记
        imgurl:require("../../../static/image/scenery/2.4.jpeg"),
        info:{
          looknumber:128764, // 多少人看过
          province:"郑州", // 城市
          synopsis:"这是简介这是简介这是简介",
          message:"中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返,"
        }
      },{
        type:"2", // 1 美食 2 景色 3 游记
        imgurl:require("../../../static/image/scenery/2.4.jpeg"),
        info:{
          looknumber:128764, // 多少人看过
          province:"郑州", // 城市
          synopsis:"这是简介这是简介这是简介",
          message:"中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返,"
        }
      }
    ]
  },{
    title:"热门评论",
    data:[
      {
        type:"3", // 1 美食 2 景色 3 游记
        imgurl:require("../../../static/image/scenery/2.4.jpeg"),
        info:{
          looknumber:128764, // 多少人看过
          province:"郑州", // 城市
          synopsis:"这是简介这是简介这是简介",
          message:"中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返,"
        }
      },{
        type:"3", // 1 美食 2 景色 3 游记
        imgurl:require("../../../static/image/scenery/2.4.jpeg"),
        info:{
          looknumber:128764, // 多少人看过
          province:"郑州", // 城市
          synopsis:"这是简介这是简介这是简介",
          message:"中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返,"
        }
      },{
        type:"3", // 1 美食 2 景色 3 游记
        imgurl:require("../../../static/image/scenery/2.4.jpeg"),
        info:{
          looknumber:128764, // 多少人看过
          province:"郑州", // 城市
          synopsis:"这是简介这是简介这是简介",
          message:"中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返,"
        }
      },{
        type:"3", // 1 美食 2 景色 3 游记
        imgurl:require("../../../static/image/scenery/2.4.jpeg"),
        info:{
          looknumber:128764, // 多少人看过
          province:"郑州", // 城市
          synopsis:"这是简介这是简介这是简介",
          message:"中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返,"
        }
      },{
        type:"3", // 1 美食 2 景色 3 游记
        imgurl:require("../../../static/image/scenery/2.4.jpeg"),
        info:{
          looknumber:128764, // 多少人看过
          province:"郑州", // 城市
          synopsis:"这是简介这是简介这是简介",
          message:"中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返中原特色,中原一绝,流连忘返,"
        }
      },
    ]
  }
]

const footData = {
  logoPath:require("../../../static/image/logo_20170124.png"),
  rightImagPath:require("../../../static/image/chengxin.png"),
  centerFontTop:"2017-2030 © XX网® qyer.com All rights reserved. Version v1.00  京公网安备11010102231342  京ICP证666666号 营业执照 经营许可证",
  centerFontBottom:"这是网站简介简介这是网站简介简介这是网站简介简介这是网站简介简介这是网站简介简介这是网站简介简介这是网站简介简介",
  friendsLink:[
    {
      name:"交通查询",
      path:"http://www.juzigo.com",
    },{
      name:"交通查询",
      path:"http://www.juzigo.com",
    },{
      name:"交通查询",
      path:"http://www.juzigo.com",
    },{
      name:"交通查询",
      path:"http://www.juzigo.com",
    },{
      name:"交通查询",
      path:"http://www.juzigo.com",
    },{
      name:"交通查询",
      path:"http://www.juzigo.com",
    },{
      name:"交通查询",
      path:"http://www.juzigo.com",
    },{
      name:"交通查询",
      path:"http://www.juzigo.com",
    },{
      name:"交通查询",
      path:"http://www.juzigo.com",
    },{
      name:"交通查询",
      path:"http://www.juzigo.com",
    },{
      name:"交通查询",
      path:"http://www.juzigo.com",
    },{
      name:"交通查询",
      path:"http://www.juzigo.com",
    },{
      name:"交通查询",
      path:"http://www.juzigo.com",
    },{
      name:"交通查询",
      path:"http://www.juzigo.com",
    },{
      name:"交通查询",
      path:"http://www.juzigo.com",
    },{
      name:"交通查询",
      path:"http://www.juzigo.com",
    },{
      name:"交通查询",
      path:"http://www.juzigo.com",
    }
  ]
}

const aboutme = {
  logoPath:require("../../../static/image/QRcode.jpg"),
}


export default class Home extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout style={{background:"#fff"}}>
        <div style={{height:'527px',width:'100%'}}>
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
                  <a href="/login">登录</a>
                </div>
              </div>
            </div>
          </Header>
          <BaseCarousel
            imgurl={imgurl}
          />
        </div>
        <div className="home-left-today">
          <HomeToday
            imageList={imageList}
          />
        </div>
        <div className="home-center">
              <HomeADimage
                adImagelist={adImagelist}
              />
        </div>
        <Content style={{background:'#fff'}}>
          <div className="home-page-warp">
            <div className="home-left-content">
              <div className="home-left">
                {/*景色*/}
                <div className="home-page-tabs">
                  <HomeScenery
                    scenerylist={scenerylist}
                  />
                </div>
                {/*美食*/}
                <div className="home-page-tabs">
                  <HomeFood
                    foodlist={foodlist}
                  />
                </div>
                {/*旅游游记*/}
                <div className="home-page-tabs">
                  <HomeStrategy
                    strategtlist={strategtlist}
                  />
                </div>
                <div className="home-page-aboutme">
                  <HomeAboutMe
                    datasource={aboutme}
                  />
                </div>
              </div>
            </div>
            <div className="home-right-content">
              {
                rightAD && rightAD.map((data,index)=>{
                  return (
                    <HomeRight datasource={data} key={index}/>
                  )
                })
              }
            </div>
          </div>
        </Content>
        <Footer style={{background:"#242424"}}>
          <HomeFoot
            datasource={footData}
          />
        </Footer>
        <BackTop />
      </Layout>
    )
  }
}
