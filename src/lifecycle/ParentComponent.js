import React from 'react';
import ChildComponent from './ChildComponent';
class ParentComponent extends React.Component{

    constructor(){
        super();
        this.state={
            flag:true
        }
    }
    changeFlagFalse=()=>{
        this.setState({flag:false});
    }
    changeFlagTrue=()=>{
        this.setState({flag:true})
    }
    render(){
        let  child;
        if(this.state.flag){
            child=<ChildComponent/>
        }
        return(
       <React.Fragment>
           {child}
        <button onClick={this.changeFlagTrue}>Mount</button>
        <button onClick={this.changeFlagFalse}>UnMount</button>
        </React.Fragment>
        );
    }
}
export default ParentComponent;