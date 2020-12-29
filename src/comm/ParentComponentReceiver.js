import React from 'react';
import ChildComponentSender from './ChildComponentSender';
class ParentComponentReceiver extends React.Component{
    constructor(){
        super();
        this.state={
            empName:''
        };
        this.changeEmpName=this.changeEmpName.bind(this);
    }
    changeEmpName(val){
        this.setState({empName:val});
    }
    render(){
        return(
            <div>
            <h1>ParentComponent</h1>
            Parent Emp Name value:{this.state.empName}
            <ChildComponentSender propsFunc={this.changeEmpName}/>
            </div>
        );
    }

}
export default ParentComponentReceiver;