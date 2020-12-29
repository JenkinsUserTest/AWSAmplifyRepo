import React from 'react';
import ChildComponent from './ChildComponent';
class ParentComponent extends React.Component{
    constructor(){
        super();
        this.state={
            empName:''
        }
    }
    changeEmpName=(event)=>{
        this.setState({empName:event.target.value});
    }
    render(){
        return(
            <div>
            <h1>Parent Component</h1>
            <p>Parent Emp Name:{this.state.empName}</p>
            Emp Name:<input type='text' value={this.state.empName} onChange={this.changeEmpName}/>
           <ChildComponent empName={this.state.empName}/>
            </div>
        );
    }

}
export default ParentComponent;