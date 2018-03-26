import React,{ Component } from 'react';
import {Lifecycle} from 'react-router';


class Tests extends Component {

  constructor(props,Lifecycle) {
    super(props,Lifecycle);
    console.log("constructor")
  }

  componentWillMount(){
    this.setState({
      num:2
    })
    console.log("componentWillMount")
  }

  componentDidMount() {
    console.log("componentDidMount")
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate")
    return true;
  }

  componentWillUpdate() {
    // this.setState({
    //   num:2
    // })
    console.log("componentWillUpdate")
  }

  componentDidUpdate() {
    // this.setState({
    //   num:2
    // })
    console.log("componentDidUpdate")
  }

  handleChange=()=>{
    debugger;
    console.log("handleChange")
    this.setState({
      num:this.state.num+1
    })
  }
  routerWillLeave() {
    console.log("routerWillLeaverouterWillLeave")
  }



  render() {
    console.log(this.props)
    console.log("render",this.state)
    return (
      <div>
        <button onClick={this.handleChange}>按钮</button>
        <span>{this.state.num}</span>
      </div>
    )
  }

}

export default Tests
