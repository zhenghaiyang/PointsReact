import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginActions from '../../reducers/Login';
import { Button,Form, Icon, Input } from 'antd';
import "./Login.css";
const FormItem = Form.Item;
@connect(
  state => ({
    loginReducer:state.loginReducer
  }),
  dispatch => bindActionCreators({...loginActions}, dispatch)
)
@Form.create()
export default class Login extends React.Component{

  constructor(props){
    super(props);
    this.handleLogin=this.handleLogin.bind(this);
  }

  handleLogin() {
    window.location.href="/home"
  }



  render(){
    console.log("LoginLoginLoginLogin");
    console.log(this.props.children)
    console.log("LoginLoginLoginLogin");
    const { getFieldDecorator } = this.props.form;
    return(
        <div className="login-background">
          <div className="login-form-center">
            <div className="login-form">
              <div className="login-form-title">
                后 台 管 理 
              </div>
              <Form>
                <FormItem>
                  {getFieldDecorator('userName', {
                    rules: [{ required: true, message: '请输入账号' }],
                  })(
                    <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="请输入账号" />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: '请输入密码' }],
                  })(
                    <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="请输入密码" />
                  )}
                </FormItem>
              </Form>
              <Button type="primary"  className="login-form-button" onClick={this.handleLogin}>
               登录
             </Button>
            </div>
          </div>
        </div>
    )
  }
}
