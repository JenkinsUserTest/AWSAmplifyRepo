import React from 'react';
class LegacyLifeCycleMethod extends React.Component{

    componentWillReceiveProps(newProps){
        console.log('Component will receive props');
    }

    componentWillMount(){
        console.log('Component will Mount');
    }
    componentDidMount(){
        console.log('Component will Mount');
    }

    shouldComponentUpdate(newProps,newState){
        return true;
    }
    componentWillUpdate(prevProps,prevState){
        console.log('Component will update');
    }
    componentDidUpdate(){
        console.log('Component did update');
    }
    componentWillUnmount(){
        console.log('component will unmount');
    }
    render(){
        console.log('render');
        return(
        <div>
        <h3>{this.props.counterProps}</h3>
        </div>
        );
    }
}
export default LegacyLifeCycleMethod;