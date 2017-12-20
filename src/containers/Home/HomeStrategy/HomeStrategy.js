import React, { Component } from 'react';
import { Icon } from 'antd';
import './HomeStrategy.less';
import {
  H2title,
  HomeSixImage
} from '../../../components';



export default class HomeStrategy extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    let strategtlist=this.props.strategtlist;
    return (
      <div>
        <div className="home-strategt-clearfix">
          <div className="left_part">
            <H2title value="游记攻略"/>
          </div>
          <div className="right_part">
            <span className="rt1">
              <Icon type="edit" />
              <span style={{marginLeft: "5px"}}>发表游记</span>
            </span>
            <span className="rt2">

            </span>
          </div>
        </div>
        <div className="home-strategt-clearfix-content">
          <HomeSixImage
            imagelist={strategtlist}
          />
        </div>
      </div>
    )
  }
}
