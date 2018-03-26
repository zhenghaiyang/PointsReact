import {Select,Icon,Button,Form } from 'antd';
import React,{ Component } from 'react';
import SelectGroup from './selectGroup';
const Option = Select.Option;
const FormItem = Form.Item;
var uuid =0;


class Tests extends Component {

  constructor(props) {
    super(props);
    this.state={
      list:[{
        first:"jack",
        last:"22"
      }],
      value:0
    }
    this.add=this.add.bind(this);
    this.del=this.del.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }

  add() {
    this.state.list.push(new Object({first:"",last:""}))
    this.setState({
      list:this.state.list
    })
  }

  componentDidMount(){
     let me = this;
    // setTimeout(function() {
    //      me.setState({value: me.state.value + 1}, function() {
    //          console.log('did callback');
    //      });
    //      console.log('hello');
    //  }, 0);
    //  console.log(me.state.value)
    this.setState({value:this.state.value+1})
    console.log("1",this.state.value)
    this.setState({value:this.state.value+1})
    console.log("2",this.state.value)
    setTimeout(function(){
      me.setState({value:me.state.value+1})
      console.log("3",me.state.value)
      me.setState({value:me.state.value+1})
      console.log("4",me.state.value)
    },0)
  }

  // componentDidUpdate(){
  //   console.log('did update');
  // }

  del(index){
    uuid++
    this.state.list.splice(index,1)
    this.setState({
      list:this.state.list
    })
  }

  handleChange(e,value,callback) {
    if(value != "" && value !=null){
      let Tempindex=e.field.split("-")
      let type = Tempindex[0];
      let index=Number(Tempindex[1]);
      let temparry = this.state.list;
      if(type=="first") {
        temparry[index].first =value
      }
      if(type=="last") {
        temparry[index].last =value
      }
    }
    callback();
  }


  render() {
    console.log("render",this.state.value)
    const { list } =this.state;
    const {getFieldDecorator} = this.props.form;
    const showList = list.map((data,index)=>{

      let canDelete = false;
      if(index !=0){
        canDelete = true;
      }
      return (
        <div key={index}>
          <FormItem label="">
            {
              getFieldDecorator(`first-${index}-${uuid}`,{
                initialValue:data && data.first,
                rules:[{validator:this.handleChange}]
              })
            (
              <Select  style={{ width: 120 }} >
               <Option value="jack">Jack</Option>
               <Option value="lucy">Lucy</Option>
               <Option value="disabled">Disabled</Option>
               <Option value="Yiminghe">yiminghe</Option>
             </Select>
            )
            }
          </FormItem>
          <FormItem label="">
            {
              getFieldDecorator(`last-${index}-${uuid}`,{
                initialValue:data && data.last,
                rules:[{validator:this.handleChange}]
              })
            (
              <Select  style={{ width: 120 }}>
               <Option value="22">22</Option>
               <Option value="33">333</Option>
               <Option value="444">4444</Option>
               <Option value="555">5555</Option>
             </Select>
            )
            }
          </FormItem>
          {canDelete &&    <span  onClick={()=>this.del(index)}><Icon type="close" /></span>}
        </div>
      )
    })
    return (
      <div>
          {showList}
          <div>
            <Button onClick={this.add}>添加</Button>
          </div>
          <div>{this.state.value}</div>
      </div>
    )
  }
}

const Test= Form.create()(Tests)
export default Test;
