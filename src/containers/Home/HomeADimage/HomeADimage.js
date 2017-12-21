import React,{ PureComponent } from 'react';
import './HomeADimage.less';



export default class HomeADimage extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    let adImagelist = this.props.adImagelist;
    return (
      <div className="ad-center-warpper">
        {
          adImagelist && adImagelist.map((data,index)=>{
            let classname= index==0 ? "ad-left-image" : "ad-right-image"
            return (
              <div className={classname} key={index}>
                <img src={data.path} alt={data.name} className="ad-image"/>
              </div>
            )
          })
        }
      </div>
    )
  }
}
