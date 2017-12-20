import React,{ Component } from 'react';
import "./ImageList.less";





export default class ImageList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let allImagelist = this.props.imageList;
    return (
      <div>
        {
          allImagelist && allImagelist.map((data,index)=>{
            return (
              <div className="imagelist-warp" key={index}>
                <div className="imagelist-warp-image">
                  <img src={data.imgurl} className="imagelist-warp-image-image"  alt={data.info && data.info.message}/>
                  <div className="imagelist-warp-image-icon">
                    <span>{data.typename}</span>
                  </div>
                </div>
                <div className="imagelist-warp-info">
                  <div className="imagelist-warp-info-subtitle">
                    <p>{data.info && data.info.message}</p>
                  </div>
                  <div className="imagelist-warp-info-bottom">
                    <span className="imagelist-warp-info-bottom-looknumber">{data.info && data.info.looknumber}人浏览过</span>
                    <span className="imagelist-warp-info-bottom-province">{data.info && data.info.province}</span>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}
