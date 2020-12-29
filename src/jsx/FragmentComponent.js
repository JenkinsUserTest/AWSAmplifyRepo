import React from 'react';
class FragmentComponent extends React.Component{

    render(){
        return(
            <React.Fragment>
            <p>This is paragraph 1</p>
            <p>This is paragraph 2</p>
            </React.Fragment>
        );
    }
}
export default FragmentComponent;