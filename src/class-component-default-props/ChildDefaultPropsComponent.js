import React from 'react';
class ChildDefaultPropsComponent extends React.Component{
    render(){
        return(
          <React.Fragment>
          <h1>{this.props.header}</h1>
           </React.Fragment>
        );
    }


}
ChildDefaultPropsComponent.defaultProps={
    header:"Default Child Header"
}
export default ChildDefaultPropsComponent;