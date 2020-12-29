import React from 'react';
class EmployeeModifyStateRegularFunction extends React.Component{

    constructor(){
        super();
        this.state={
            empName:''
        }
       this.changeEmpName=this.changeEmpName.bind(this);
    }

    changeEmpName(event){
        //this by default refers to window
        this.setState({empName:event.target.value});
    }
    render(){
        return(
    <React.Fragment>
    <form>
    <p>Current Value:{this.state.empName}</p>
    <input type="text" name="empName" value={this.state.empName} onChange={this.changeEmpName}/>
    <button type="button" onClick={this.changeEmpName}>Modify state</button>
    </form>
    </React.Fragment>
    );
    }
}
export default EmployeeModifyStateRegularFunction;