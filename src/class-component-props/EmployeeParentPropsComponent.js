import React from 'react';
import EmployeeHeaderPropsComponent from './EmployeeHeaderPropsComponent';
import EmployeeContentPropsComponent from './EmployeeContentPropsComponent';
class EmployeeParentPropsComponent extends React.Component{

    constructor(){
        super();
        this.state={
            header:"Yash Technologies",
            content:"Employee Information"
        }
    }
    render(){
        return(
            <React.Fragment>
            <EmployeeHeaderPropsComponent headerProp={this.state.header}/>
            <EmployeeContentPropsComponent contentProp={this.state.content}/>
            </React.Fragment>
        );
    }

}
export default EmployeeParentPropsComponent;