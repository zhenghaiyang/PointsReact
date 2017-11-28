import React,{ PureComponent } from 'react';
import './NotFountPage.less';
export default class NotFountPage extends PureComponent {
  render() {
    return (
      <div className="not-fount-page">
        <div className="error-center">
          <div className="error-type">
            404
          </div>
          <div className="error-issue">
            Page Not Found
          </div>
        </div>
      </div>
    );
  }
}
