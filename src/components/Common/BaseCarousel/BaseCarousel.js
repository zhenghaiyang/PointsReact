import React,{ Component } from 'react';
import {Carousel} from 'antd';
import './BaseCarousel.less';

export default class BaseCarousel extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    let imgUrl=this.props.imgurl;
    return (
      <Carousel
        autoplay
        className="mycarousel"
        >
        {
          imgUrl && imgUrl.map((data,index)=>{
            return (
              <div key={index} className="carousel-div">
                <img src={data.url} alt={data.name} className="carousel-img" />
              </div>
            )
          })
        }
      </Carousel>
    )
  }
}
