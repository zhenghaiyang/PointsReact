import React,{ Component } from 'react';
import './HomeToday.less';
import {
  ImageList
} from '../../../components';

export default class HomeToday extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-today-content">
        <h2>今天推荐</h2>
        <div className="home-today-content-box">
          <ImageList
            imageList={this.props.imageList}
          />
        </div>
      </div>
    )
  }
}
