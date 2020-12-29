import React from 'react';
class JSXComponent extends React.Component{

render(){
    const renderData=<p>Coming from Variable</p>;
    return (
        <div>
            {renderData}
            </div>
    );
}

}
export default JSXComponent;