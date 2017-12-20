import React, { Component } from 'react';
import './HomeSixImage.less';


export default class HomeSixImage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let imagelist = this.props.imagelist;
    console.log(imagelist)
    return (
      <div>
        {
          imagelist && imagelist.map((data,index)=>{
            let classname = data.isLeft ? "home-siximage-left" : (data.isRight ? "home-siximage-right": "home-siximage");
            return (
              <div className={classname} key={index}>
                <img src={data.imgurl} className="home-siximage-image"/>
                <div className="home-siximage-product_cover">
                  <div className="home-siximage-product_cover-product_tit">
                    {data.info && data.info.message}
                  </div>
                  <dl className="home-siximage-product_cover-product_more_mes">
                    <dt className="home-siximage-product_cover-comment_per">
                      {data.info && data.info.province}
                    </dt>
                    <dd>
                      <div className="home-siximage-product_cover-comment_per-dd">
                        {data.info && data.info.looknumber}人浏览过
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}
