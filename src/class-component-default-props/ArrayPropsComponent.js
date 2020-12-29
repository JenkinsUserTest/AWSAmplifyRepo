import React from 'react';
import PropTypes from 'prop-types';
class ArrayPropsComponent extends React.Component{
    render(){
        return(
        <React.Fragment>
        <ul>
            {
                this.props.passArray.map(
                    (element)=>(
                        <li key={element}>{element}</li>
                    )
                )
            }
        </ul>
        </React.Fragment>
        );
    }
}
ArrayPropsComponent.defaultProps={
    passArray:['rohit','rakesh','sabbir']
}
ArrayPropsComponent.propTypes={
    passArray:PropTypes.array.isRequired
}
export default ArrayPropsComponent;