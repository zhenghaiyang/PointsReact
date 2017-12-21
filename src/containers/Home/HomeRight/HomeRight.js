import React , { Component } from 'react';
import './HomeRight.less';



export default class HomeRight extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    let datasource = this.props.datasource;
    return (
      <div className="homeright-aside_box">
        <div className="homeright-aside_box-inner">
          <h3 >{datasource.title}</h3>
          {
            datasource && datasource.data && datasource.data.map((data,index)=>{
              return (
                <div className="homeright-aside_box-div" key={index}>
                  <img src={data.imgurl} className="homeright-aside_box-div-img"/>
                  <h6>{data.info && data.info.synopsis}</h6>
                  <p>{data.info && data.info.message}</p>
                  <p>
                    <span className="homeright-aside_box-div-fl">{data.info && data.info.province}</span>
                    <span className="homeright-aside_box-div-fr">{data.info && data.info.looknumber} 人看过</span>
                  </p>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
