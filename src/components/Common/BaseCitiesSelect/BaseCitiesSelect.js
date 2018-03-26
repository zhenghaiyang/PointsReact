import React,{ Component } from 'react';
import { Select,Tabs,Input,Icon,Spin  } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseCitiesSelectActions from './reducers';
const TabPane = Tabs.TabPane;
import './BaseCitiesSelect.less';

const province=[
  {
    name:"河南",
    code:"001",
  },{
    name:"福建",
    code:"002",
  },{
    name:"浙江",
    code:"003",
  },{
    name:"广东",
    code:"004"
  },{
    name:"上海",
    code:"005"
  },{
    name:"北京",
    code:"006"
  },{
    name:"河北",
    code:"008"
  }
]

@connect(
  state => ({
    baseCitiesSelectData:state.baseCitiesSelectData
  }),
  dispatch => bindActionCreators({...baseCitiesSelectActions}, dispatch)
)
export default class BaseCitiesSelect extends Component {

  constructor(props) {
    super(props);
    this.state={
      inputStaus:false,
      activeKey:"province"
    }
    this.handleInputChange=this.handleInputChange.bind(this);
    this.handleProvinceFontClick=this.handleProvinceFontClick.bind(this);
    this.handleTabsChange=this.handleTabsChange.bind(this);
  }

  componentWillMount() {
    this.props.getAllProvince()
  }

  // input右侧icon改变方法
  handleInputChange(e) {
    this.setState({
      inputStaus:!this.state.inputStaus,
    })
  }

  // 具体省份点击
  handleProvinceFontClick(e,provinceinfo) {
    e.preventDefault();// 处理a标签默认点击事件
    // 请求省份下面的市县
    //  成功以后自动跳到下一级
    this.setState({
      activeKey:"city"
    })
    //console.log(provinceinfo)
  }

  // Tabs 页面切换
  handleTabsChange(key) {
    this.setState({
      activeKey:key
    })
    //console.log(key)
  }


  render() {
    // console.log("baseCitiesSelectData")
    // console.log(this.props)
    // console.log("baseCitiesSelectData")
    const suffix= this.state.inputStaus ? <Icon type="down" /> : <Icon type="left" />
    return (
      <div style={{width:'400px'}}>
        <Input suffix={suffix} onClick={this.handleInputChange} placeholder="请选择省市区"/>
        {
          this.state.inputStaus ? (
            <div className="card-container">
              <Tabs
                type="card"
                activeKey={this.state.activeKey}
                onChange={this.handleTabsChange}
                >
                <TabPane tab="省份" key="province">
                  {
                    province ? (province.map((data,index)=>{
                      return (
                        <span className="tabpaneFont" key={data.code}><a onClick={(e)=>this.handleProvinceFontClick(e,data)}>{data.name}</a></span>
                      )
                    })) : (
                      <div className="tabpanespin">
                        <Spin/>
                      </div>
                    )
                  }
                </TabPane>
                <TabPane tab="城市" key="city">
                    <div className="tabpanespin">
                      <Spin/>
                    </div>
                </TabPane>
                <TabPane tab="区县" key="county">

                </TabPane>
                <TabPane tab="街道/乡镇" key="street">

                </TabPane>
                <TabPane tab="村庄" key="village">

                </TabPane>
              </Tabs>
            </div>
          ):null
        }
      </div>
    )
  }
}
