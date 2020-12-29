import React from 'react';
class LifeCycleComponentUpdating extends React.Component{
    constructor(){
        super();
        this.state={
            empName:'initial value'
        }
    }
    changeEmpName=()=>{
        console.log("--changeEmpName--");
        this.setState({empName:'Shabbir'});
    }

  shouldComponentUpdate(){
      console.log("--should component update--");
      return true;
  }

  getSnapshotBeforeUpdate=(prevProps,prevState)=>{
      console.log("--get snapshot before update--");
      document.getElementById("div1").innerHTML="Before update:"+prevState.empName;
      return null;
  }

  componentDidUpdate(){
      console.log("--component did update--");
      document.getElementById("div2").innerHTML="After update:"+this.state.empName;
  }
 
    render(){
      console.log("--render--");
      return(

          <React.Fragment>
          <p>Emp Name:{this.state.empName}</p>
          <button onClick={this.changeEmpName}>Update</button>
          <div id="div1"></div>
          <div id="div2"></div>
          </React.Fragment>
      );
    }
}
export default LifeCycleComponentUpdating;