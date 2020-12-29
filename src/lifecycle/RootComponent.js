import React from 'react';
import LegacyLifeCycleMethod from './LegacyLifeCycleMethod';
class RootComponent extends React.Component{

    constructor(){
        super();
        this.state={
            counter:0
        }
    }
    changeCounter=()=>{
        this.setState({counter:this.state.counter+1})
    }
    render(){
        return(
            <React.Fragment>
            <button onClick={this.changeCounter}>+</button>
            <LegacyLifeCycleMethod counterProps={this.state.counter}/>
            </React.Fragment>
        );
    }
}
export default RootComponent;