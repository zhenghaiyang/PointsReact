import React,{ PureComponent } from 'react';
import './H2title.less';

export default class H2title extends PureComponent {
  constructor(props) {
    super(props);
  }


  render() {
    let value = this.props.value;
    return (
      <h2 className="basetitle-h2">{value}</h2>
    )
  }
}
