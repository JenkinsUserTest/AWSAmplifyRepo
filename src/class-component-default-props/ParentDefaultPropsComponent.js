import React from 'react';
import PropTypes from 'prop-types';
import ChildDefaultPropsComponent from './ChildDefaultPropsComponent';
class ParentDefaultPropsComponent extends React.Component{

    render(){
        return(
            <div>
             <ChildDefaultPropsComponent header={this.props.header}/>    
            </div>
        );
    }
}
ParentDefaultPropsComponent.defaultProps={
    header:"Default Header"
}
ParentDefaultPropsComponent.propTypes={
    header:PropTypes.string
}
export default ParentDefaultPropsComponent;