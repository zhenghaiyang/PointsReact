import React, { Component } from 'react';
import './HomeFoot.less';

export default class HomeFoot extends Component {

  constructor(props) {
    super(props);
  }




  render() {
    let datasource=this.props.datasource && this.props.datasource;
    return (
      <div className="homefoot-inner">
        <div className="footer-copyright">
          <a className="footer-copyright-right">
            <img  style={{width:"102px",height:"35px"}} src={datasource.rightImagPath}/>
          </a>
          <a className="footer-copyright-left">
            <img src={datasource.logoPath} style={{width:"100%",height:"100%"}}/>
          </a>
          <p>{datasource.centerFontTop}</p>
          <p>{datasource.centerFontBottom}</p>
        </div>
        <div className="footer-links">
          <span>友情链接</span>
          {
            datasource && datasource.friendsLink.map((data,index)=>{
              return (
                <p key={index}><a href={data.path} target="_blank">{data.name}</a></p>
              )
            })
          }
        </div>
      </div>
    )
  }
}
