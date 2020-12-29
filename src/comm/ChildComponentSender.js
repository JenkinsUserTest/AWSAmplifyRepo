import React from 'react';
class ChildComponentSender extends React.Component{
    constructor(){
        super();
        this.state={
            empName:''
        };
        this.onEmpChange=this.onEmpChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    onEmpChange(event){
        this.setState({empName:event.target.value});
    }
    handleSubmit(){
        this.props.propsFunc(this.state.empName);
    }
    render(){
        return(
        <div>
        <hr/>
        <h3>Child Component</h3>
        Current Emp Name is {this.state.empName}<br></br>
        Emp Name:<input type='text' value={this.state.empName} onChange={this.onEmpChange}/>
        <input type="button" value="submit" onClick={this.handleSubmit}/>
        </div>
        );
    }
    
}
export default ChildComponentSender;