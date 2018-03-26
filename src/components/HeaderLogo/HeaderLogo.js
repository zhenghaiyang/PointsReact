import React,{ PureComponent } from 'react';
import './HeaderLogo.less'

export default class HeaderLogo extends PureComponent {

  constructor(props) {
    super(props);
    this.handleOnclick=this.handleOnclick.bind(this)
  }

  handleOnclick() {
    window.location.href="/home"
  }


  render() {
    //console.log("222222222")
    return (
      <div className="logo-box" onClick={this.handleOnclick}>
        <a>
          <img src={require("./img/logo.jpg")} alt="logo"/>
          <h1 className="logo-box-h1">More Points Game</h1>
        </a>
      </div>
    )
  }
}
