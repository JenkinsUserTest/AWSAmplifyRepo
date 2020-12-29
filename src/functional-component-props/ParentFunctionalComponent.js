import React from 'react';
import ChildFunctionalComponent from './ChildFunctionalComponent';
function ParentFunctionalComponent(){
    const parentVar="This is coming from Parent functional component";
    return <ChildFunctionalComponent value={parentVar}/>
}
export default ParentFunctionalComponent;