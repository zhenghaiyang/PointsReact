import React,{ Component } from 'react';
import './HomeFood.less';
import {
  H2title,
  HomeSixImage
} from '../../../components';


export default class HomeFood extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    let foodlist = this.props.foodlist
    return (
      <div>
        <div className="home-food-clearfix">
          <div className="left_part">
            <H2title value="美食"/>
          </div>
          <div className="right_part">
            <span className="rt1">
              {/* <Icon type="edit" /> */}
              <span style={{marginLeft: "5px"}}>
                >>更多美食
              </span>
            </span>
            <span className="rt2">

            </span>
          </div>
        </div>
        <div className="home-scenery-clearfix-content">
          <HomeSixImage
            imagelist={foodlist}
          />
        </div>
      </div>
    )
  }
}
