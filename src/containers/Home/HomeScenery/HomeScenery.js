import React, { Component } from 'react';
import { Icon } from 'antd';
import './HomeScenery.less';
import {
  H2title,
  HomeSixImage
} from '../../../components';


export default class HomeScenery extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let scenerylist = this.props.scenerylist
    return (
      <div>
        <div className="home-scenery-clearfix">
          <div className="left_part">
            <H2title value="景色"/>
          </div>
          <div className="right_part">
            <span className="rt1">
              {/* <Icon type="edit" /> */}
              <span style={{marginLeft: "5px"}}>
                >>更多景色
              </span>
            </span>
            <span className="rt2">

            </span>
          </div>
        </div>
        <div className="home-scenery-clearfix-content">
          <HomeSixImage
            imagelist={scenerylist}
          />
        </div>
      </div>

    )
  }
}
