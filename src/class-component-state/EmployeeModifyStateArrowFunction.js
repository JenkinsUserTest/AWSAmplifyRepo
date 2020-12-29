import React from 'react';
class EmployeeModifyStateArrowFunction extends React.Component{
 
 constructor(){
     super();
     this.state={
         empName:''
     }
 }
 changeEmpName=()=>{
     this.setState({empName:'sabbir'})
 }

render(){
    return(
    <React.Fragment>
        <p>Current Value:{this.state.empName}</p>
        <button type="button" onClick={this.changeEmpName}>Modify</button>
    </React.Fragment>
    );
}
}
export default EmployeeModifyStateArrowFunction;